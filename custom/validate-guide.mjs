import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { readChannelFile } from './channels-file.mjs'
import { MIN_CHANNEL_RATIO, MIN_GUIDE_BYTES, validateGuideXml } from './guide-xml.mjs'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

export function validateGuideFile(guidePath, channelsPath) {
  if (!fs.existsSync(guidePath)) {
    return {
      ok: false,
      errors: [`guide does not exist: ${path.relative(root, guidePath)}`],
      bytes: 0,
      channelCount: 0,
      programCount: 0,
      expectedChannels: 0
    }
  }

  const xml = fs.readFileSync(guidePath, 'utf8')
  const expectedChannels = fs.existsSync(channelsPath) ? readChannelFile(channelsPath).length : undefined
  const result = validateGuideXml(xml, {
    expectedChannels,
    minBytes: numberFromEnv('MIN_GUIDE_BYTES', MIN_GUIDE_BYTES),
    minChannelRatio: numberFromEnv('MIN_CHANNEL_RATIO', MIN_CHANNEL_RATIO)
  })

  return { ...result, expectedChannels: expectedChannels ?? 0 }
}

export function reportValidation(result) {
  if (result.ok) {
    console.log(
      `guide ok: ${result.channelCount} channels, ${result.programCount} programmes, ${result.bytes} bytes`
    )
    return
  }

  console.error('guide validation failed:')
  for (const error of result.errors) console.error(`  - ${error}`)
}

function numberFromEnv(name, fallback) {
  const raw = process.env[name]
  if (raw === undefined || raw === '') return fallback
  const value = Number(raw)
  if (!Number.isFinite(value)) {
    throw new Error(`${name} must be a number`)
  }
  return value
}

const invokedDirectly = process.argv[1]
  ? import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href
  : false

if (invokedDirectly) {
  const guidePath = path.resolve(root, process.argv[2] || 'public/guide.xml')
  const channelsPath = path.resolve(root, process.argv[3] || 'custom/usa.channels.xml')
  const result = validateGuideFile(guidePath, channelsPath)
  reportValidation(result)
  process.exit(result.ok ? 0 : 1)
}
