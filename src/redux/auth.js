// @ts-check

// Actions
const LOGIN = Symbol('@@Auth/login')
const LOGOUT = Symbol('@@Auth/logout')

/** @type {{isLogin: boolean, username: string}} */
const initState = {
  isLogin: false,
  username: '',
}

// Reducer
export function reducer(state = initState, action) {
  const { type } = action
  switch (type) {
    case LOGIN:
      const {
        payload: { username },
      } = action
      return {
        ...state,
        isLogin: true,
        username,
      }
    case LOGOUT:
      return {
        ...state,
        isLogin: false,
        username: '',
      }
    default:
      return state
  }
}

// Action Creators
export function login(payload) {
  const { username, password } = payload
  // TODO async login
  if (username !== 'root' || password !== '123') {
    return
  }
  return {
    type: LOGIN,
    payload,
  }
}

export function logout() {
  return { type: LOGOUT }
}
