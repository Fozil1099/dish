import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      isMain: true,
    },
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/view/:id',
    name: 'detail',
    meta: {
      isMain: false,
    },
    component: () => import('@/views/Details/RecipeDetail.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
