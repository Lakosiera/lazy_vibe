import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../ui/views/HomeView.vue'
import AboutView from '../ui/views/AboutView.vue'
import ThinkView from '@/ui/views/ThinkView.vue'
import SearchView from '@/ui/views/SearchView.vue'
import AdminView from '@/ui/views/AdminView.vue'
import IdeaView from '@/ui/views/IdeaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/think',
      name: 'think',
      component: ThinkView,
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView,
    },
    {
      path: '/idea/:id?',
      name: 'idea',
      component: IdeaView,
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

export default router
