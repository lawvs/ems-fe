// @ts-check
import { apis } from './constants'

const headers = {
  'Content-Type': 'application/json;charset=utf-8',
}

/**
 * @param {{username: string, password: string}} payload
 * @returns {Promise<Response>}
 */
export const loginApi = async payload => {
  const { login } = apis
  const resp = await fetch(login, {
    method: 'POST',
    headers: {
      ...headers,
    },
    body: JSON.stringify(payload),
  })
  return resp
}
