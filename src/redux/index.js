// https://github.com/reduxjs/redux
import { createStore } from 'redux'
import { combineReducers } from 'redux'

import { reducer as auth } from './auth'

const reducer = combineReducers({
  auth,
})

export default createStore(reducer)
