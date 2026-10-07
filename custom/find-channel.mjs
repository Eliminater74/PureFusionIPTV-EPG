import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

const sources = [
  {
    site: 'tvpassport.com',
    file: 'sites/tvpassport.com/tvpassport.com.channels.xml',
    note: 'preferred USA source'
  },
  {
    site: 'tvguide.com',
    file: 'sites/tvguide.com/tvguide.com.channels.xml',
    note: 'use when TVPassport has no listing'
  },
  {
    site: 'zap2it.com',
    file: 'sites/zap2it.com/zap2it.com.channels.xml',
    note: 'many entries have an empty xmltv_id'
  }
]

const args = process.argv.slice(2)
let siteFilter = ''
let limit = 25
const queryParts = []

for (const arg of args) {
  if (arg === '--help' || arg === '-h') {
    printHelp()
    process.exit(0)
  } else if (arg.startsWith('--site=')) {
    siteFilter = arg.slice('--site='.length).trim()
  } else if (arg.startsWith('--limit=')) {
    limit = Number(arg.slice('--limit='.length))
  } else if (arg.startsWith('-')) {
    console.error(`Unknown option: ${arg}`)
    printHelp()
    process.exit(1)
  } else {
    queryParts.push(arg)
  }
}

const query = queryParts.join(' ').trim()

if (!query) {
  printHelp()
  process.exit(1)
}

if (!Number.isInteger(limit) || limit < 1 || limit > 200) {
  console.error('--limit must be an integer from 1 to 200')
  process.exit(1)
}

const selected = sources.filter(source => !siteFilter || source.site === siteFilter)
if (selected.length === 0) {
  console.error(`Unknown site "${siteFilter}". Use tvpassport.com, tvguide.com, or zap2it.com.`)
  process.exit(1)
}

const needle = query.toLowerCase()
const matches = []

for (const source of selected) {
  const filepath = path.join(root, source.file)
  const xml = fs.readFileSync(filepath, 'utf8')
  const lines = xml.split(/\r?\n/)

  for (const line of lines) {
    if (!line.includes('<channel ')) continue
    if (!line.toLowerCase().includes(needle)) continue

    matches.push({
      source,
      line: line.trim(),
      hasXmltvId: /xmltv_id="[^"]+"/.test(line)
    })
  }
}

matches.sort((a, b) => {
  if (a.hasXmltvId !== b.hasXmltvId) return a.hasXmltvId ? -1 : 1
  return a.source.site.localeCompare(b.source.site) || a.line.localeCompare(b.line)
})

const shown = matches.slice(0, limit)

console.log(`Query: ${query}`)
console.log(`Preferred source: tvpassport.com`)
console.log(`${matches.length} match(es), showing ${shown.length}.`)
console.log('Copy one <channel> line into custom/usa.channels.xml.')
console.log('Keep each xmltv_id unique. Skip lines whose xmltv_id is empty.')
console.log('')

let currentSite = ''
for (const match of shown) {
  if (match.source.site !== currentSite) {
    currentSite = match.source.site
    console.log(`${currentSite} (${match.source.note})`)
  }
  console.log(`  ${match.line}`)
  if (!match.hasXmltvId) {
    console.log('    xmltv_id is empty. Do not copy this line until an official iptv-org id is set.')
  }
}

if (matches.length > shown.length) {
  console.log('')
  console.log(`Results truncated. Raise the cap with --limit=${Math.min(matches.length, 200)}.`)
}

function printHelp() {
  console.log(`Usage: npm run purefusion:find-channel -- <query> [--site=<site>] [--limit=<n>]

Search USA channel definitions already shipped with this fork.

Examples:
  npm run purefusion:find-channel -- AMC
  npm run purefusion:find-channel -- "Newsmax" --site=tvpassport.com
  npm run purefusion:find-channel -- WTVT

Sites, in preference order:
  tvpassport.com   primary USA source
  tvguide.com      official xmltv_id values, narrower coverage
  zap2it.com       USA listings, xmltv_id often blank`)
}
