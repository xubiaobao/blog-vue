<template>
  <div class="layout-main">
    <app-main />
    <skip></skip>
    <mouse-move></mouse-move>
  </div>
</template>

<script>
import AppMain from './components/AppMain.vue'
import Skip from './components/Skip.vue'
import mouseMove from '../components/mouseMove.vue'

export default{
  name: 'Layout',
  components: { AppMain, mouseMove, Skip }
}
</script>

<style>
.layout-main {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
