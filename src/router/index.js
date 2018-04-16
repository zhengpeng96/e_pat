import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Hmoe/Home.vue'
import Category from '../pages/Category/Category.vue'
import User from '../pages/User/User.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/category',
      component: Category
    }
  ]
})
