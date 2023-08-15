import { nextTick } from 'vue';
import { createI18n } from 'vue-i18n';
import { setCookie, getCookie } from '../mixins/helpers';
import Services from '../config/_axios';
import api from '../api/index';

let i18n;

export const SUPPORT_LOCALES = ['tr', 'en'];

export function setI18nLanguage(locale) {
  loadLocaleMessages(locale);

  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale;
  } else {
    i18n.global.locale.value = locale;
  }

  setCookie("language", locale);
}

export async function loadLocaleMessages(locale) {
  try {
    const response = await Services.get(api[locale + 'Json']);
    const messages = response.data
    i18n.global.setLocaleMessage(locale, messages);
    return nextTick();
  } catch (error) {
    console.error('Error loading locale messages:', error);
  }
}

export default function setupI18n() {
  if (!i18n) {
    let locale = getCookie("language");

    i18n = createI18n({
      globalInjection: true,
      missingWarn: false,
      silentTranslationWarn: true,
      fallbackWarn: false,
      legacy: false,
      locale: locale,
      fallbackLocale: 'tr'
    });

    setI18nLanguage(locale);
  }
  return i18n;
}