import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../ui/views/HomeView.vue'
import AboutView from '../ui/views/AboutView.vue'
import IdeaView from '@/ui/views/IdeaView.vue'
import IdeaSearchView from '@/ui/views/IdeaSearchView.vue'
import AdminView from '@/ui/views/AdminView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/idea',
      name: 'idea',
      component: IdeaView,
    },
    {
      path: '/search',
      name: 'search',
      component: IdeaSearchView,
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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../ui/views/AboutView.vue'),
    },
  ],
})

export default router
