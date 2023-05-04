<template>
  <div class="wrapper">
      this is Introde!
    <div @click="urlJump()">jump</div>
  </div>
</template>

<script>
export default {
  name: 'Introde',
  methods: {
    urlJump () {
      // 页面跳转
      this.$router.push({ path: '/' })
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
