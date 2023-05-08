<template>
  <div class="wrapper">
    <div class="signboard">
      <span>this is a test!</span>
      <span>this is a test2!</span>
    </div>
    <div @click="urlJump()" style="position: relative;z-index: 101;">jump</div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    urlJump () {
      // 页面跳转
      this.$router.push({ path: '/introde' })
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  background: rebeccapurple;
}

.signboard {
  width: 100%;
  height: 100%;
  display: flex;
  position:absolute;
  align-items: center;
  flex-direction:column;
  justify-content: center;
}

.signboard span:first-child {
  font-size: 35px;
  font-family: youshebiaotihei;
}
</style>
