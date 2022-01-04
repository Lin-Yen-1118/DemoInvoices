import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'



const routes = [
  {
    path: '/',
    name: 'homePage',
    component: () => import(/* webpackChunkName: "about" */ '../views/Index.vue'),
    meta: {
      title: '首頁'
    },
  },
  {
    path: '/input',
    name: 'input',
    component: () => import(/* webpackChunkName: "about" */ '../views/Input.vue'),
    meta: {
      title: '手動輸入'
    },
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
