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
    component: () => import('@/views/RecipeDetail.vue'),
  },
  {
    path: '/add/',
    name: 'add',
    meta: {
      isMain: false,
    },
    component: () => import('@/views/AddRecipe.vue'),
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router
