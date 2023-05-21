<template>
  <div class="layout-main">
    <app-main />
    <skip></skip>
    <mouse-move></mouse-move>
    <date style='position:absolute;z-index:9999;top: 0;right: 1%;'></date>
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
  /**
   * 看板娘初始化
    参数说明
    model 模型的配置
       json 文件资源路径，可以支持网络路径，此处使用的是相对路径
       scale 模型缩放系数
    display 模型布局
       position 位置
       width 宽度
       height 高度
       hOffset 水平偏移量
       vOffset 垂直偏移量
    mobile 移动端配置
       show 显示/隐藏
       scale 缩放比例
    react 模型矩形框样式
       opacity 透明度
       opacityDefault 默认透明度
       opacityOnHover 鼠标悬浮透明度
  */
  created () {
    setTimeout(() => {
      window.L2Dwidget.init({
        pluginRootPath: '../../static/live2dw/',
        pluginJsPath: 'lib/',
        pluginModelPath: 'live2d-widget-model-haru_2/assets/', // 中间这个haru_2就是看板娘,换这个就可以了
        tagMode: false,
        debug: false,
        model: { jsonPath: '../../static/live2dw/live2d-widget-model-haru_2/assets/haru02.model.json' },
        display: { position: 'left', width: 150, height: 300 }, // 调整大小,和位置
        mobile: { show: true }, // 要不要盯着你的鼠标看
        log: false
      })
    }, 1000)
  },
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
