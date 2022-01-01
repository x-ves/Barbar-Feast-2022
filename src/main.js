import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import BaseButton from "./components/UI/BaseButton.vue";
import BaseCard from "./components/UI/BaseCard.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

library.add(faFacebookSquare, faInstagram, faCalendarCheck);


const app = createApp(App);

app.use(store);
app.use(router);

app.component("base-button", BaseButton);
app.component("base-card", BaseCard);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount('#app');