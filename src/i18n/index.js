import { createI18n } from 'vue-i18n';
import Services from '../config/_axios';
import API from '../api/index';

const i18n = createI18n({
  legacy: false,
  locale: 'tr',
  messages: {}
});

async function loadLocaleMessages(locale) {
  try {
    const response = await Services.get(API[locale + 'Json']);
    i18n.global.setLocaleMessage(locale, response.data);
  } catch (error) {
    console.error('Çeviri dosyası getirilemedi:', error);
  }
}

loadLocaleMessages(i18n.global.locale.value);

export default i18n;