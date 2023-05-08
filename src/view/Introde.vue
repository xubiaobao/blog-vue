<template>
  <div class="wrapper">
      this is Introde!
    <div @click="urlJump()" style="position: relative;z-index: 101;">jump</div>
  </div>
</template>

<script>
export default {
  name: 'Introde',
  methods: {
    urlJump () {
      // 页面跳转
      this.$router.push({ path: '/home' })
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  background: green;
}
</style>
