<template>
  <div class="layout-main">
    <app-main />
    <skip></skip>
    <mouse-move></mouse-move>
    <date style='position:absolute;z-index:500;top: 0;right: 1%;'></date>
  </div>
</template>

<script>
import Date from '../components/date'
import Skip from './components/Skip.vue'
import AppMain from './components/AppMain.vue'
import mouseMove from '../components/mouseMove.vue'

export default{
  name: 'Layout',
  components: { AppMain, mouseMove, Skip, Date },
  mounted () {
    window.addEventListener('wheel', this.handleMouseWheel, {
      passive: false
    })
    this.keyDown()
  },
  beforeDestroy () {
    window.removeEventListener('wheel', this.handleMouseWheel, {
      passive: false
    })
  },
  methods: {
    handleMouseWheel (e) {
      if (!window.scrollY) {
        // 禁止页面滚动
        // e.preventDefault()

        if (e.wheelDelta) {
          // 判断浏览器IE，谷歌滑轮事件
          if (e.wheelDelta > 0) {
            this.lastJump()
          }
          if (e.wheelDelta < 0) {
            // 当滑轮向下滚动时
            this.nextJump()
          }
        } else if (e.detail) {
          // Firefox滑轮事件
          if (e.detail > 0) {
            // 当滑轮向下滚动时
            this.nextJump()
          }
          if (e.detail < 0) {
            // 当滑轮向上滚动时
            this.lastJump()
          }
        }
      }
    },
    nextJump () {
      const next = this.$route.meta.next
      if (next !== undefined && next !== '') {
        this.$router.push({ path: next })
      }
    },
    lastJump () {
      const last = this.$route.meta.last
      if (last !== undefined && last !== '') {
        this.$router.push({ path: last })
      }
    },
    // 监听键盘
    keyDown () {
      document.onkeydown = (e) => {
        // 事件对象兼容
        let e1 = e || event || window.event // || arguments.callee.caller.arguments[0]
        // 键盘按键判断:左箭头-37;上箭头-38；右箭头-39;下箭头-40
        if (e1 && e1.keyCode === 38) {
          this.lastJump()
        } else if (e1 && e1.keyCode === 40) {
          this.nextJump()
        }
      }
    }
  }
}
</script>

<style>
.layout-main {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
