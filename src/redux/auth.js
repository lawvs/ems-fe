// @ts-check
import { get } from 'lodash'
import { loginApi } from '../api'

// Actions
const LOGIN = '@@Auth/login'
const LOGIN_THEN = '@@Auth/login@then'
const LOGIN_CATCH = '@@Auth/login@catch'
const LOGOUT = '@@Auth/logout'

/**
 * Enum for login state
 * @readonly
 * @constant
 * @enum {string}
 * @export
 * */
const loginState = {
  NOT_LOGGED_IN: 'NOT_LOGGED_IN',
  LOGGING_IN: 'LOGGING_IN',
  LOGGED_IN: 'LOGGED_IN',
}

export { loginState }

/** @type {{loginState: string, message: string, user: object}} */
const initState = {
  loginState: loginState.NOT_LOGGED_IN,
  message: '',
  user: {
    username: '',
    role: '',
  },
}

// Reducer
export function reducer(state = initState, action) {
  const { type } = action
  switch (type) {
    case LOGIN:
      return {
        ...state,
        loginState: loginState.LOGGING_IN,
        message: '', // clear message when logging in
      }
    case LOGIN_THEN: {
      const { payload } = action
      return {
        ...state,
        loginState: loginState.LOGGED_IN,
        message: '',
        user: payload,
      }
    }
    case LOGIN_CATCH:
    case LOGOUT: {
      const { error } = action
      return {
        ...state,
        loginState: loginState.NOT_LOGGED_IN,
        user: {},
        message: error && get(error, 'message', ''),
      }
    }
    default:
      return state
  }
}

// Action Creators
/**
 * @param {{username: string, password: string}} payload
 */
export function login(payload) {
  return async dispatch => {
    dispatch({ type: LOGIN })
    const resp = await loginApi(payload)
    if (!resp.ok) {
      dispatch({ type: LOGIN_CATCH, error: { message: resp.statusText } })
      return
    }
    dispatch({ type: LOGIN_THEN, payload: { ...resp.body } })
  }
}

/**
 * @returns {{type: string, payload?, error?}}
 */
export function logout() {
  return { type: LOGOUT }
}
