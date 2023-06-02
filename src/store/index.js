import Vue from 'vue'
import vuex from 'vuex'
// import map from './modules/map';

Vue.use(vuex)

export default new vuex.Store({
  state: {
    lastVisitPath: '', // 暂存将要访问的路径
    isShowWechatCode: false
  },
  mutations: {
    changePath: function (state, path) {
      state.lastVisitPath = path
    },
    changeWechat (state, data) {
      state.isShowWechatCode = data
    }
  }
  // modules: {
  //     map
  // }
})
