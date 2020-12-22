import Vue from 'vue'
import Router from 'vue-router'
import Login from "../views/Login"
import Main from "../views/Main"
import index from "../views/index"
import about from "../views/about"
import alllines from "../views/alllines"
import user from "../views/user"
import line from "../views/line"
import search_result from "../views/search_result"
import currentbus from "../views/currentbus"
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
      path: '/line',
      name: 'line',
      component: line
    },
    //查询结果
    {
      path: '/search_result',
      name: 'search_result',
      component: search_result
    },
    //当前公交运营情况
    {
      path: '/currentbus',
      name: 'currentbus',
      component: currentbus
    }
  ]
})
