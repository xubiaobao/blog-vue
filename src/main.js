// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import VueParticles from 'vue-particles'

import '../src/assets/font/font.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

/****
    前置路由
    判断是否第一次加载，第一次加载需要到loading预加载资源后跳转
    页面标题
    页面描述
    页面关键词
 ****/
router.beforeEach(function (to, from, next) {
  /****
    路由发生变化修改页面title
  ****/
  if (to.meta.title) {
    document.title = to.meta.title
  }

  /****
    判断关键词和描述
  ****/
  if (to.meta.content) {
    let head = document.getElementsByTagName('head')
    let metaKeyword = document.createElement('meta')
    let metaDescription = document.createElement('meta')
    if (document.querySelector('meta[name="keywords"]')) {
      document.querySelector('meta[name="keywords"]').setAttribute('content', to.meta.content.keywords)
    } else {
      metaKeyword.setAttribute('name', 'keywords')
      metaKeyword.setAttribute('content', to.meta.content.keywords)
      head[0].appendChild(metaKeyword)
    }
    if (document.querySelector('meta[name="description"]')) {
      document.querySelector('meta[name="description"]').setAttribute('content', to.meta.content.description)
    } else {
      metaDescription.setAttribute('name', 'description')
      metaDescription.setAttribute('content', to.meta.content.description)
      head[0].appendChild(metaDescription)
    }
  }

  // 值不存在，判断为第一次加载，跳转loading
  if (store.state.lastVisitPath === '') {
    // 存储需要跳转到的页面地址，跳转loading
    store.commit('changePath', to.path)
    next({
      path: '/'
    })
  } else {
    next()
  }
})

Vue.use(ElementUI)

// 动态粒子特效
Vue.use(VueParticles)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
