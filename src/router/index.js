import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProjectDetail from '../views/ProjectDetail.vue'
import Admin from '../views/Admin.vue'

const useHashRouting = import.meta.env.BASE_URL !== '/'

export default createRouter({
  history: useHashRouting ? createWebHashHistory() : createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    { path: '/', component: Home },
    { path: '/admin', component: Admin },
    { path: '/projects/:slug', component: ProjectDetail },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})