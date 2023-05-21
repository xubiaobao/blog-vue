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
          path: '',
          name: 'Home',
          component: () => import('../view/Home'),
          meta: { index: 1, next: '/introde', last: '' }
        },
        {
          path: '/introde',
          name: 'Introde',
          component: () => import('../view/Introde'),
          meta: { index: 2, next: '/draw', last: '/' }
        },
        {
          path: '/draw',
          name: 'Draw',
          component: () => import('../view/Draw'),
          meta: { index: 3, next: '/article', last: '/introde' }
        },
        {
          path: '/article',
          name: 'Article',
          component: () => import('../view/Article'),
          meta: { index: 3, next: '/board', last: '/draw' }
        },
        {
          path: '/board',
          name: 'Board',
          component: () => import('../view/Board'),
          meta: { index: 3, next: '', last: '/article' }
        }
      ]
    }
  ]
})
