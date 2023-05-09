<template>
  <div class="box">
    <p class="boxTemperature">{{weatcherData.temp}}°</p>
    <p class="boxWeather">{{weatcherData.text}}</p>
    <p class="boxWind">{{(weatcherData.windDir)}}{{weatcherData.windScale}}</p>
    <p class="boxCity">{{weatcherData.city}}</p>
  </div>
 </template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      weatcherData: {}
    }
  },
  created () {
    this.getWeather()
    this.timer = setInterval(() => {
      this.getWeather()
    }, 1000 * 60 * 60)
  },
  methods: {
    getWeather () { // 第三方天气api接口
      axios.get('http://localhost:8000/admin/weather').then(res => {
        if (res.status === 200) {
          this.weatcherData = res.data
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }
}
</script>

<style scoped>
.box{
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.boxWeather{
  margin: 0 0 0 15px;
}
.boxWind{
  margin: 0 15px 0 8px;
}
</style>
