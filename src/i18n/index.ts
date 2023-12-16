import {initReactI18next} from 'react-i18next';

import * as Localization from 'expo-localization';
import i18n from 'i18next';

import en from './en.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {translation: en},
    // ... other languages
  },
  lng: Localization.locale,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
