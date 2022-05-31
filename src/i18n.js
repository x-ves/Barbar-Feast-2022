import { createI18n } from "vue-i18n";

/* function loadLocaleMessages() {
  const locales = require.context(
    "./locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages = {};
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

export default loadLocaleMessages;
 */

function getStartingLocale() {
  /*   const browserLocale = getBrowserLocale({ countryCodeOnly: true });

  if (supportedLocalesInclude(browserLocale)) {
    return browserLocale;
  } else { */
  return process.env.VUE_APP_I18N_LOCALE || "et";
  /* } */
}

const startingLocale = getStartingLocale();

const loadedLanguages = [];

const i18n = createI18n({
  locale: startingLocale,
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: {}
})


export async function loadLocaleMessagesAsync(locale) {

  if (loadedLanguages.length > 0 && i18n.locale === locale) {
    return Promise.resolve(locale);
  }

  // if the language was already loaded
  if (loadedLanguages.includes(locale)) {
    i18n.locale = locale;
    return Promise.resolve(locale);
  }

  // if the language hasn't been loaded yet
  return import(
    /* webpackChunkName: "locale-[request]" */ `@/locales/${locale}.json`
  ).then(messages => {
    i18n.global.setLocaleMessage(locale, messages.default);

    loadedLanguages.push(locale);

    i18n.locale = locale;

    return Promise.resolve(locale);
  });
}

loadLocaleMessagesAsync(i18n.locale);

export default i18n;