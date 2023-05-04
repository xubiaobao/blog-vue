import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../view/Home'),
      meta: {
        title: 'this is a test',
        content: {
          keywords: 'this,is,a,test',
          description: 'this is a test'
        }
      }
    },
    {
      path: '/introde',
      name: 'Introde',
      component: () => import('../view/Introde')
    }
  ]
})
