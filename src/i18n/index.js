import { zipObject } from 'lodash'
// https://www.i18next.com/
import { createInstance } from 'i18next'
// https://react.i18next.com/
import { reactI18nextModule } from 'react-i18next'

import en_US from './en-US.json'
import ja_JP from './ja-JP.json'
import zh_CN from './zh-CN.json'

const DEBUG = process.env.NODE_ENV === 'development'
const LOCALES = ['zh-CN', 'ja-JP', 'en-US']
const resources = [zh_CN, ja_JP, en_US].map(t => {
  return { translation: t }
})
const mainRes = zipObject(LOCALES, resources)

const standardizeLocale = language => {
  if (LOCALES.includes(language)) return language
  switch (language.substr(0, 2).toLowerCase()) {
    case 'zh':
      return 'zh-CN'
    case 'ja':
      return 'ja-JP'
    default:
      return 'en-US'
  }
}

const language = standardizeLocale(navigator.language)

const i18next = createInstance()
i18next.init({
  lng: language,
  resources: mainRes,
  debug: DEBUG,
  interpolation: {
    escapeValue: false,
  },
})

export default i18next
