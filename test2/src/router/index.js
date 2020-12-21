import Vue from 'vue'
import Router from 'vue-router'
import Login from "../views/Login"
import Main from "../views/Main"
import index from "../views/index"
import about from "../views/about"
import alllines from "../views/alllines"
import user from "../views/user"
import showline from "../views/showline"
;

Vue.use(Router)

export default new Router({
  routes: [
    //登陆
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    //查询路线
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    //首页
    {
      path: '/index',
      name: 'index',
      component: index
    },
    //详情
    {
      path: '/about',
      name: 'about',
      component: about
    },
    //所有线路
    {
      path: '/alllines',
      name: 'alllines',
      component: alllines
    },
    //用户信息
    {
      path: '/user',
      name: 'user',
      component: user
    },
    //路线展示
    {
      path: '/showline',
      name: 'showline',
      component: showline
    }
  ]
})
