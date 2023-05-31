<template>
  <div>
    <div v-for="(path, cl) in imageList" :key="cl" :class="`phone-box imgi img${cl}`" ref="path">
      <img :src="path" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'phone',
  data () {
    return {
      imageList: [
        '../../../static/draw/fat.jpg',
        '../../../static/draw/dog.png',
        '../../../static/draw/see.png',
        '../../../static/draw/laugh.jpg'
      ]
    }
  }
}
</script>

<style scope>
.phone-box {
  transition: 0.1s;
  -moz-transition: 1s;
  -webkit-transition: 1s;
  position: absolute;
  border: 1px solid #ddd;
}

img {
  width: 100%;
  padding: 10px 10px 15px 10px;
  z-index: 1;
}

.phone-box:hover {
  -webkit-transform: rotate(0deg) !important;
  transform: scale(1.2) !important;
  -webkit-transform: scale(1.2) !important;
  box-shadow: 4px 4px 10px #ccc !important;
  -moz-box-shadow: 4px 4px 10px #ccc !important;
  -webkit-box-shadow: 4px 4px 10px #ccc !important;
  z-index: 1 !important;
}

.phone-box img {
  width: 120px;
}

.img0 {
  top: 50px;
  left: 300px;
  transform: rotate(0deg);
}

.img1 {
  margin-left: 50%;
  top: 250px;
  left: 200px;
  transform: rotate(-40deg);
}

.img2 {
  top: 10px;
  left: 660px;
  transform: rotate(-20deg);
}

.img3 {
  top: 250px;
  left: 600px;
  transform: rotate(30deg);
}

.img4 {
  top: 10px;
  left: 1100px;
  transform: rotate(10deg);
}
</style>
