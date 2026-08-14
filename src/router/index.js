import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProjectDetail from '../views/ProjectDetail.vue'
import NotFound from '../views/NotFound.vue'
import Admin from '../views/Admin.vue'
export default createRouter({history:createWebHistory(),scrollBehavior:()=>({top:0}),routes:[{path:'/',component:Home},{path:'/admin',component:Admin},{path:'/projects/:slug',component:ProjectDetail},{path:'/:pathMatch(.*)*',component:NotFound}]})
