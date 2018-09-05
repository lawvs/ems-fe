// https://github.com/reduxjs/redux
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

import { reducer as auth } from './auth'

const DEBUG = process.env.NODE_ENV === 'development'

const reducer = combineReducers({
  auth,
})

let store

if (DEBUG) {
  const debugMiddleware = store => next => action => {
    console.debug(action) // eslint-disable-line no-console
    return next(action)
  }
  // https://github.com/zalmoxisus/redux-devtools-extension
  store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : debugMiddleware
  )
} else {
  store = createStore(reducer)
}

export default store
