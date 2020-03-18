import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Manage.vue'),
    name: '',
    children: [{
      path: '',
      component: () => import('@/views/Home.vue'),
    }, {
      path: '/About',
      component: () => import('@/views/About.vue'),
    }, {
      path: '/Home1',
      component: () => import('@/views/Home1.vue'),
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
