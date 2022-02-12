import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lineup',
    name: 'Lineup',
    // route level code-splitting
    // this generates a separate chunk (lineup.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "lineup" */ '../views/Lineup.vue')
  },
  {
    path: "/info",
    name: "Info",
    component: () => import(/* webpackChunkName: "info" */ '../views/Info.vue')
  },
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

export default router
