<template>
  <div class="wrapper">
    <div class="signboard">
      <span>BAO YAN BAO YU</span>
      <span>welcome to my blog</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
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
  font-family: youshebiaotihei;
  font-size: calc(60vw * 100 / 1920);
}

.signboard span:nth-child(2){
  font-weight: bold;
  font-family: fangsong;
  font-size: calc(22vw * 100 / 1920);
}
</style>
