import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import * as es from './i18n/es.json'
import * as en from './i18n/en.json'
import * as fr from './i18n/fr.json'
i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: en
    },
    es: {
      translations: es
    },

    fr: {
      translations: fr
    }
  },
  fallbackLng: 'en',
  debug: false,

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  // The keySeparator default value was false, we needed to replace it with '.' for returnObjects(Translator's property to access object keys instead of literal) so that interpolation works together.
  keySeparator: '.', // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ','
  },

  react: {
    wait: true
  }
})

export default i18n
