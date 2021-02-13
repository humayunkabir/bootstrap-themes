import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Themes',
    component: () => import(/* webpackChunkName: "themes" */ '@/views/Themes')
  },
  {
    path: '/themes/:id',
    name: 'Theme',
    props: true,
    component: () => import(/* webpackChunkName: "theme" */ '@/views/Theme')
  },
  {
    path: '/analytics',
    name: 'ThemeAnalytics',
    component: () => import(/* webpackChunkName: "theme-analytics" */ '@/views/ThemeAnalytics')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
