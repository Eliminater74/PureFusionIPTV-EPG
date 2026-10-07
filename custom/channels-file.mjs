import fs from 'node:fs'

const channelPattern = /<channel\b([^>]*)>([^<]*)<\/channel>/g
const attributePattern = /([A-Za-z_][\w:.-]*)="([^"]*)"/g

export function readChannelFile(filepath) {
  const xml = fs.readFileSync(filepath, 'utf8')
  return parseChannels(xml)
}

export function parseChannels(xml) {
  const channels = []

  for (const match of xml.matchAll(channelPattern)) {
    const attributes = {}
    for (const attribute of match[1].matchAll(attributePattern)) {
      attributes[attribute[1]] = decodeXml(attribute[2])
    }

    channels.push({
      site: attributes.site || '',
      site_id: attributes.site_id || '',
      lang: attributes.lang || '',
      xmltv_id: attributes.xmltv_id || '',
      name: decodeXml(match[2]).trim()
    })
  }

  return channels
}

export function assertChannelList(channels) {
  const errors = []
  const seenXmltvIds = new Set()
  const seenSiteIds = new Set()

  if (channels.length < 1) errors.push('channel list is empty')

  channels.forEach((channel, index) => {
    const label = channel.name || channel.site_id || `entry ${index + 1}`

    for (const key of ['site', 'site_id', 'lang', 'xmltv_id', 'name']) {
      if (!channel[key]) errors.push(`${label}: missing ${key}`)
    }

    if (channel.xmltv_id && countryCode(channel.xmltv_id) !== 'us') {
      errors.push(`${label}: ${channel.xmltv_id} is not a .us iptv-org id`)
    }

    if (channel.xmltv_id) {
      if (seenXmltvIds.has(channel.xmltv_id)) {
        errors.push(`${label}: duplicate xmltv_id ${channel.xmltv_id}`)
      }
      seenXmltvIds.add(channel.xmltv_id)
    }

    if (channel.site && channel.site_id) {
      const siteKey = `${channel.site}\t${channel.site_id}`
      if (seenSiteIds.has(siteKey)) {
        errors.push(`${label}: duplicate site_id ${channel.site_id} on ${channel.site}`)
      }
      seenSiteIds.add(siteKey)
    }
  })

  return errors
}

export function countryCode(xmltvId) {
  const baseId = xmltvId.split('@')[0]
  const parts = baseId.split('.')
  return (parts[parts.length - 1] || '').toLowerCase()
}

function decodeXml(value) {
  return value
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/&amp;/g, '&')
}
