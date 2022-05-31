import { createRouter, createWebHistory } from 'vue-router'
import i18n, { loadLocaleMessagesAsync } from "@/i18n";
import { setDocumentLang, setDocumentTitle } from "@/util/i18n/document";

const routes = [
  {
    path: "/",
    redirect: `/${i18n.global.locale}`
  },
  {
    path: "/:locale",
    component: () =>
    import(/* webpackChunkName: "root" */ "./Root.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/Home.vue")
      },
      {
        path: "lineup",
        name: "lineup",
        component: () =>
          import(/* webpackChunkName: "lineup" */ "../views/Lineup.vue")
      },
      {
        path: "schedule",
        name: "schedule",
        component: () =>
          import(/* webpackChunkName: "schedule" */ "../views/Schedule.vue")
      },
      {
        path: "info",
        name: "info",
        component: () =>
          import(/* webpackChunkName: "info" */ "../views/Info.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {
      top: 0
  }},
})

router.beforeEach((to, from, next) => {
  if (to.params.locale === from.params.locale) {
    next();
    return;
  }

  const locale = to.params.locale;

  loadLocaleMessagesAsync(locale).then(() => {
    i18n.global.locale = locale;
    setDocumentLang(locale);
    setDocumentTitle(i18n.global.t("app.title"));
  });

  next();
});

export default router
