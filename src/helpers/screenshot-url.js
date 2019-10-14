import { getApiUrl } from '@microlink/mql'
import { pickBy } from 'lodash'

export default (url, opts) => {
  const [screenshotUrl] = getApiUrl(url, {
    ...pickBy(opts),
    screenshot: true,
    meta: false,
    embed: 'screenshot.url'
  })
  return screenshotUrl
}
