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
    getWeather () {
      // 获取城市信息
      const getCityUrl = '/map?key=UIJBZ-LKUK7-JHYXB-PHF7H-FUJLK-3HFIO&sig=80273ea56500c3ab425239c654a6cd1e'
      axios.get(getCityUrl).then(result => {
        if (result.data) {
          // 获取天气api接口
          axios.get('https://wechat.baoyanbaoyu.top/blog/weather?locationInfo=' + JSON.stringify(result.data.result)).then(res => {
            if (res.data.code === 200) {
              this.weatcherData = res.data.data
            }
          }).catch(err2 => {
            console.log(err2)
          })
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
