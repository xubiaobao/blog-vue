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
        clickMode="repulse"
        class="lizi"
      >
      </vue-particles>
    <phone style="position:absolute;width:100%;height:100%;z-index:999;top:0;" />
    </div>
</template>

<script>
import mouseMove from '../components/mouseMove.vue'
import phone from '../components/draw/phone.vue'

export default {
  name: 'Draw',
  methods: {
    urlJump () {
      // 页面跳转
      this.$router.push({ path: '/home' })
    }
  },
  components: { mouseMove, phone }
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  background: rebeccapurple;
}
</style>
