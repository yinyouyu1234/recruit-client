import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const Layout = () => import('../views/layout/Index.vue')
const HomeView = () => import('../views/HomeView.vue')
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: HomeView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
