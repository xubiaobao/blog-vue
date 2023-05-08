import Vue from 'vue'
import Layout from '@/layout'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      meta: {
        title: 'this is a test',
        content: {
          keywords: 'this,is,a,test',
          description: 'this is a test'
        }
      },
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('../view/Home')
        },
        {
          path: '/introde',
          name: 'Introde',
          component: () => import('../view/Introde')
        },
        {
          path: '/draw',
          name: 'Draw',
          component: () => import('../view/Draw')
        }
      ]
    }
  ]
})
