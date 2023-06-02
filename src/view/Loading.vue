<template>
  <div>预加载</div>
</template>

<script>
import imageList from '../imageList'

export default {
  name: 'Loading',
  beforeCreate () {
    // 预加载图片
    for (let image of imageList) {
      let img = new Image()
      img.onload = () => {
        img.onload = null // 避免内存泄漏
      }
      img.src = image
    }
  },
  mounted () {
    // this.addDegree()
  },
  data () {
    return {
      count: 0,
      randomWord: '<?.Ad256v.',
      realWord: '29.670.232'
    }
  },
  methods: {
    addDegree () {
      // 定时器设置进度条百分比和乱码集结数
      let finalNum = 100
      let timer = setInterval(() => {
        this.count++
        // 随机字符串
        this.randomWord = Math.random().toString(36).slice(2, 12)
        if (this.count > 90) {
          // 文字颜色变成黑色
          document.getElementById('degree').style.color = 'black'
        }
        if (this.count > finalNum) {
          // 避免count大于finalNum最终数字显示不对
          this.count = finalNum
          // 真实预约数替换随机字符串
          this.randomWord = this.realWord
          // 已链接终端
          document.getElementById('terminal-word').style.opacity = 1
          document.getElementById('terminal-word').classList.add('word-blink')
          // 清空定时器
          clearInterval(timer)
          timer = null
        }
      }, 10)
    },
    toHome () {
      // 1.5s后跳转主页
      setTimeout(() => {
        const jumpPath = this.$store.state.lastVisitPath
        if (jumpPath !== '' && jumpPath !== '/') {
          this.$router.push({ path: jumpPath })
        } else {
          this.$router.push({ path: '/home' })
        }
      }, 1500)
    }
  }
}
</script>

<style>
</style>
