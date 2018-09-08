// https://github.com/reduxjs/redux
import { createStore, applyMiddleware, combineReducers } from 'redux'
// https://github.com/reduxjs/redux-thunk
import thunk from 'redux-thunk'

import { reducer as auth } from './auth'
import { reducer as config } from './config'

const DEBUG = process.env.NODE_ENV === 'development'

const reducer = combineReducers({
  auth,
  config,
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
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk))
      : applyMiddleware(debugMiddleware, thunk)
  )
} else {
  // production
  store = createStore(reducer, applyMiddleware(thunk))
}

export default store
