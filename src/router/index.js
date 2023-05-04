import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
