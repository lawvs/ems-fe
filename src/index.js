import React from 'react'
import { render } from 'react-dom'
// https://github.com/reduxjs/react-redux
import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'

import store from './redux'
import i18n from './i18n'
import App from './pages/App'
import './styles.css'

render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </Provider>,
  document.getElementById('root')
)
