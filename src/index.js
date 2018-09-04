import React from 'react'
import { render } from 'react-dom'
// https://github.com/reduxjs/react-redux
import { Provider } from 'react-redux'

import store from './redux'
import App from './pages/App'
import './styles.css'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
