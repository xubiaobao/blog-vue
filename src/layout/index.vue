<template>
  <div class="layout-main">
    <app-main />
    <skip></skip>
    <mouse-move></mouse-move>
    <date style='position:absolute;z-index:500;top: 0;right: 0;'></date>
  </div>
</template>

<script>
import Date from '../components/date'
import Skip from './components/Skip.vue'
import AppMain from './components/AppMain.vue'
import mouseMove from '../components/mouseMove.vue'

export default{
  name: 'Layout',
  components: { AppMain, mouseMove, Skip, Date }
}
</script>

<style>
.layout-main {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
