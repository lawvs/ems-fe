import { trimStart, trimEnd, mapValues } from 'lodash'

const API_URL = process.env.API_URL
const PUBLIC_URL = process.env.PUBLIC_URL

const baseUrl = API_URL || PUBLIC_URL || ''
export { baseUrl }

const urls = {
  login: 'api/login',
}

const apis = mapValues(
  urls,
  url => `${trimEnd(baseUrl, '/')}/${trimStart(url, '/')}` // handle '/'
)

export { apis }
