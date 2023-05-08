<template>
  <div class="wrapper">
    <div class="signboard">
      <span>BAO YAN BAO YU</span>
      <span>welcome to my blog</span>
    </div>
    <Weather style='position:absolute;z-index:500;'></Weather>
  </div>
</template>

<script>
import Weather from '../components/weather.vue'

export default {
  name: 'Home',
  components: { Weather }
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url('../../static/back.jpg');
}

.signboard {
  width: 100%;
  height: 100%;
  display: flex;
  position:absolute;
  align-items: center;
  flex-direction:column;
  justify-content: center;
  color: rgb(31, 31, 31);
}

.signboard span:first-child {
  font-size: calc(60vw * 100 / 1920);
  font-family: youshebiaotihei;
}

.signboard span:nth-child(2){
  font-size: calc(20vw * 100 / 1920);
}
</style>
