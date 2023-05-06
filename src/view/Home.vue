<template>
  <div class="wrapper">
    this is a test!
    <div @click="urlJump()" style="position: relative;z-index: 101;">jump</div>
    <mouseMove></mouseMove>
  </div>
</template>

<script>
import mouseMove from '../components/mouseMove.vue'

export default {
  name: 'Home',
  methods: {
    urlJump () {
      // 页面跳转
      this.$router.push({ path: '/introde' })
    }
  },
  components: { mouseMove }
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  background: rebeccapurple;
}
</style>
