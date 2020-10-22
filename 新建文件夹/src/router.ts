import { createRouter, createWebHashHistory } from 'vue-router'
const loader = (fileName) => import(`./pages/${fileName}`)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: loader('home.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
 
export default router