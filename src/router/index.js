import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Root from "./Root.vue";
import i18n, { loadLocaleMessages } from "@/i18n.js";
import { setDocumentLang, setDocumentTitle } from "@/util/i18n/document.js";

const routes = [
  {
    path: "/",
    redirect: "/" + i18n.locale
  },
  {
    path: "/:locale",
    component: Root,
    children: [
      {
        path: "",
        name: "Home",
        component: Home
      },
      {
        path: 'lineup',
        name: 'Lineup',
        // route level code-splitting
        // this generates a separate chunk (lineup.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "lineup" */ '../views/Lineup.vue')
      },
      {
        path: 'schedule',
        name: 'Schedule',
        component: () => import(/* webpackChunkName: "schedule" */ '../views/Schedule.vue')
      },
      {
        path: "info",
        name: "Info",
        component: () => import(/* webpackChunkName: "info" */ '../views/Info.vue')
      }
  ]},
  {
    path: "/:notFound(.*)",
    name: "NotFound",
    component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {
      top: 0
  }},
})


router.beforeEach((to, from, next) => {
  if (to.locale === from.locale) {
    next();
    return;
  }

  const { locale } = to.params;

  loadLocaleMessages(locale).then(() => {
    setDocumentLang(locale);
    setDocumentTitle(i18n.t("app.title"));
  });

  next();
});

export default router
