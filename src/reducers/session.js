// @ts-check

/** @type {{isLogin: boolean, username: string}} */
const init = {
  isLogin: false,
  username: '',
}

export default (state = init, action) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(action) // eslint-disable-line no-console
  }
  const { type, username } = action
  switch (type) {
    case '@@Session/login':
      return {
        ...state,
        isLogin: true,
        username,
      }
    case '@@Session/logout':
      return {
        ...state,
        isLogin: false,
        username: '',
      }
    default:
      return state
  }
}
