import i18next, { language } from '../i18n'

// Actions
const CHANGE_LNG = '@@Config/changeLng'

const initState = {
  lng: language,
}

export function reducer(state = initState, action) {
  const { type } = action
  switch (type) {
    case CHANGE_LNG: {
      const {
        payload: { lng },
      } = action
      return {
        ...state,
        lng,
      }
    }
    default:
      return state
  }
}

export function changeLng(lng) {
  i18next.changeLanguage(lng)
  return {
    type: CHANGE_LNG,
    payload: { lng },
  }
}
