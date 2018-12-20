import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // { path: '/login', name: 'login', component: resolve => require(['@/pages/login'], resolve)},
    { path: '/', name: 'login', component: resolve => require(['@/pages/login'], resolve) },
    { path: '/home', name: 'home', component: resolve => require(['@/pages/home'], resolve),
      children: [
        { path: '/borrow', name: 'borrow', component: resolve => require(['@/pages/borrow'], resolve)},
        { path: '/return', name: 'return', component: resolve => require(['@/pages/return'], resolve)},
        { path: '/books', name: 'books', component: resolve => require(['@/pages/books'], resolve)}
      ]
    }
  ]
});
