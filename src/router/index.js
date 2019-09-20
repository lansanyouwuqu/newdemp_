import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'





Vue.use(VueRouter)
const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/about',
    component:About
  },
  {
    path:'/home',
    component:Home
  }
]

const router = new VueRouter({
  //配置组件和路由组件之间的应用关系
  routes,
  mode:'history'
})
export default router
