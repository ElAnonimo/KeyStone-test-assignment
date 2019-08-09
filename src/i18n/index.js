import i18n from 'i18next';

import en from './locales/en';

const resources = {
  en: {
    translation: en
  }
};

i18n
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
