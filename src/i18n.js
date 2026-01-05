// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import bn from './translation/bn.json';
import en from './translation/en.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: en },
      bn: { translation: bn },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
