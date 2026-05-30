import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import SearchPage from '@/views/SearchPage.vue'
import DevotionalPage from '@/views/DevotionalPage.vue'
import FamilyPage from '@/views/FamilyPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/search',
      name: 'search',
      component: SearchPage,
    },
    {
      path: '/devotional',
      name: 'Devotional',
      component: DevotionalPage,
    },
    {
      path: '/family',
      name: 'Family',
      component: FamilyPage,
    },
  ],
})

export default router
