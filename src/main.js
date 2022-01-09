import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';
import { createI18n } from "vue-i18n";
import loadLocaleMessages from "./i18n";

import BaseButton from "./components/UI/BaseButton.vue";
import BaseCard from "./components/UI/BaseCard.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFacebookSquare, faInstagram, faBandcamp, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faCalendarCheck, faBars, faTimes, faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faFacebookSquare, faInstagram, faBandcamp, faSpotify, faCalendarCheck, faBars, faTimes, faLongArrowAltLeft);

const i18n = createI18n({
    locale: process.env.VUE_APP_I18N_LOCALE || "et",
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
    messages: loadLocaleMessages()
})

const app = createApp(App);

app.use(store);
app.use(router);
app.use(i18n);

app.component("base-button", BaseButton);
app.component("base-card", BaseCard);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount('#app');