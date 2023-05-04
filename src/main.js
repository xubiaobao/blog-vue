// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

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

  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
