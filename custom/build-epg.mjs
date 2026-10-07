import fs from 'node:fs'
import path from 'node:path'
import zlib from 'node:zlib'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { assertChannelList, readChannelFile } from './channels-file.mjs'
import { reportValidation, validateGuideFile } from './validate-guide.mjs'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const channelsPath = path.join(root, 'custom', 'usa.channels.xml')
const tempGuidePath = path.join(root, 'temp', 'purefusion-guide.xml')
const publicDir = path.join(root, 'public')
const guidePath = path.join(publicDir, 'guide.xml')
const gzipPath = path.join(publicDir, 'guide.xml.gz')
const statusPath = path.join(publicDir, 'status.json')

const days = boundedInteger('DAYS', 7, 1, 14)
const maxConnections = boundedInteger('MAX_CONNECTIONS', 5, 1, 5)

const channels = readChannelFile(channelsPath)
const channelErrors = assertChannelList(channels)
if (channelErrors.length) {
  console.error('custom/usa.channels.xml is not usable:')
  for (const error of channelErrors) console.error(`  - ${error}`)
  process.exit(1)
}

fs.mkdirSync(path.dirname(tempGuidePath), { recursive: true })
fs.rmSync(tempGuidePath, { force: true })

const npmExecPath = process.env.npm_execpath
const grabCommand = npmExecPath
  ? [process.execPath, npmExecPath, 'run', 'grab', '---']
  : [process.platform === 'win32' ? 'npm.cmd' : 'npm', 'run', 'grab', '---']

const grab = spawnSync(
  grabCommand[0],
  [
    ...grabCommand.slice(1),
    `--channels=${path.relative(root, channelsPath).replace(/\\/g, '/')}`,
    `--output=${path.relative(root, tempGuidePath).replace(/\\/g, '/')}`,
    `--days=${days}`,
    `--maxConnections=${maxConnections}`
  ],
  {
    cwd: root,
    stdio: 'inherit',
    env: process.env,
    shell: process.platform === 'win32' && !npmExecPath
  }
)

if (grab.status !== 0) {
  console.error('guide generation failed, so the published files were left unchanged')
  process.exit(grab.status || 1)
}

const result = validateGuideFile(tempGuidePath, channelsPath)
reportValidation(result)
if (!result.ok) {
  console.error('validation failed, so the published files were left unchanged')
  process.exit(1)
}

const xml = fs.readFileSync(tempGuidePath)
const gzip = zlib.gzipSync(xml)
const sites = [...new Set(channels.map(channel => channel.site))].sort()
const status = {
  generatedAt: new Date().toISOString(),
  status: 'ok',
  channelCount: result.channelCount,
  programCount: result.programCount,
  daysRequested: days,
  maxConnections,
  channelsFile: 'custom/usa.channels.xml',
  sites,
  bytes: result.bytes
}

fs.mkdirSync(publicDir, { recursive: true })
writeAtomically(guidePath, xml)
writeAtomically(gzipPath, gzip)
writeAtomically(statusPath, `${JSON.stringify(status, null, 2)}\n`)
fs.rmSync(tempGuidePath, { force: true })

console.log(`published ${path.relative(root, guidePath)}`)
console.log(`published ${path.relative(root, gzipPath)}`)
console.log(`published ${path.relative(root, statusPath)}`)

function boundedInteger(name, fallback, min, max) {
  const raw = process.env[name]
  const value = raw === undefined || raw === '' ? fallback : Number(raw)
  if (!Number.isInteger(value) || value < min || value > max) {
    console.error(`${name} must be an integer from ${min} to ${max}`)
    process.exit(1)
  }
  return value
}

function writeAtomically(filepath, contents) {
  const temporary = `${filepath}.partial`
  fs.writeFileSync(temporary, contents)
  fs.renameSync(temporary, filepath)
}
