import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutPage.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactPage.vue'),
  },
  {
    path: '/histoire',
    name: 'histoire',
    component: () => import('@/views/HistoirePage.vue'),
  },
  {
    path: '/bureau',
    name: 'bureau',
    component: () => import('@/views/BureauPage.vue'),
  },
  {
    path: '/rejoindre',
    name: 'rejoindre',
    component: () => import('@/views/RejoindrePage.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
