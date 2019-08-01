// 定义router对象，导出给main.js使用
import VueRouteer from 'vue-router'
import Vue from 'vue'
import Login from '@/views/login'

Vue.use(VueRouteer)

const router = new VueRouteer({
  routes: [
    {
      path: '/login', name: 'login', component: Login
    }
  ]
})

export default router
