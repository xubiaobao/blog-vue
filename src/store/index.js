import Vue from 'vue'
import vuex from 'vuex'
// import map from './modules/map';

Vue.use(vuex)

export default new vuex.Store({
  state: {
    isShowWechatCode: false
  },
  mutations: {
    changeWechat (state, data) {
      state.isShowWechatCode = data
    }
  }
  // modules: {
  //     map
  // }
})
