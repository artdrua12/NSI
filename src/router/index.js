import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/create',
    name: 'create',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateView.vue')
  },
  {
    path: '/loadDischarge',
    name: 'loadDischarge',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoadDischargeView.vue')
  }
]

const router = new VueRouter({ 
  mode: 'history',
  routes
})

export default router
