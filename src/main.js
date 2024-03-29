import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';
/* import { createI18n } from "vue-i18n"; */
import i18n from "./i18n";
import { createMetaManager, plugin as metaPlugin} from 'vue-meta'

import BaseButton from "./components/UI/BaseButton.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseTitle from "./components/UI/BaseTitle.vue";

import TheMap from "./components/layout/TheMap.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFacebookSquare, faInstagram, faBandcamp, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faCalendarCheck, faBars, faTimes, faLongArrowAltLeft, faHome } from "@fortawesome/free-solid-svg-icons";

library.add(faFacebookSquare, faInstagram, faBandcamp, faSpotify, faCalendarCheck, faBars, faTimes, faLongArrowAltLeft, faHome);

/* const i18n = createI18n({
    locale: process.env.VUE_APP_I18N_LOCALE || "et",
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
    messages: loadLocaleMessages()
}) */

const metaManager = createMetaManager();

const app = createApp(App);

app.use(i18n);
app.use(store);
app.use(router);
app.use(metaManager);
app.use(metaPlugin);

app.component("base-button", BaseButton);
app.component("base-card", BaseCard);
app.component("base-title", BaseTitle);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("the-map", TheMap);

app.mount('#app');