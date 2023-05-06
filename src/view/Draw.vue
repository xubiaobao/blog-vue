<template>
    <div class="wrapper">
        <vue-particles
        color="#fff"
        :particleOpacity="0.7"
        :particlesNumber="60"
        shapeType="circle"
        :particleSize="4"
        linesColor="#fff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="lizi"
      >
      </vue-particles>
    </div>
</template>

<script>
import mouseMove from '../components/mouseMove.vue'

export default {
  name: 'Draw',
  methods: {
    urlJump () {
      // 页面跳转
      this.$router.push({ path: '/home' })
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
