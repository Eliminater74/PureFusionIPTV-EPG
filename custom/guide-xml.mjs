import { XmlDocument } from 'libxml2-wasm'

export const MIN_GUIDE_BYTES = 8192
export const MIN_CHANNEL_RATIO = 0.5

export function validateGuideXml(xml, options = {}) {
  const minBytes = options.minBytes ?? MIN_GUIDE_BYTES
  const minChannelRatio = options.minChannelRatio ?? MIN_CHANNEL_RATIO
  const expectedChannels = options.expectedChannels
  const errors = []
  const bytes = Buffer.byteLength(xml)
  let channelCount = 0
  let programCount = 0

  if (!xml.trim()) errors.push('guide is empty')
  if (bytes < minBytes) errors.push(`guide is ${bytes} bytes, below the ${minBytes} byte minimum`)

  let document
  try {
    document = XmlDocument.fromString(xml)
    const rootName = document.root?.name
    if (rootName !== 'tv') errors.push(`root element is <${rootName || 'missing'}>, expected <tv>`)
    channelCount = countTags(xml, 'channel')
    programCount = countTags(xml, 'programme')
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    errors.push(`XML is not well-formed: ${message}`)
  } finally {
    document?.dispose?.()
  }

  if (channelCount < 1) errors.push('guide has no <channel> elements')
  if (programCount < 1) errors.push('guide has no <programme> elements')

  if (typeof expectedChannels === 'number' && expectedChannels > 0) {
    if (channelCount > expectedChannels) {
      errors.push(`guide has ${channelCount} channels, more than the ${expectedChannels} requested`)
    }

    const minimumChannels = Math.max(1, Math.ceil(expectedChannels * minChannelRatio))
    if (channelCount > 0 && channelCount < minimumChannels) {
      errors.push(
        `guide has ${channelCount} channels, fewer than the sane minimum of ${minimumChannels}`
      )
    }
  }

  if (channelCount > 0 && programCount > 0 && programCount < channelCount) {
    errors.push(`guide has ${programCount} programmes for ${channelCount} channels`)
  }

  return {
    ok: errors.length === 0,
    errors,
    bytes,
    channelCount,
    programCount
  }
}

function countTags(xml, name) {
  const pattern = new RegExp(`<${name}(?:\\s|>)`, 'g')
  return xml.match(pattern)?.length ?? 0
}
