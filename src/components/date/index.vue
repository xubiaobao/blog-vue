<template>
  <div class="date-weather">
    <date></date>
    <weather></weather>
  </div>
</template>

<script>
import Date from './date.vue'
import Weather from './weather.vue'

export default {
  name: 'index',
  data () {
    return {
      weatherUrl: 'https://devapi.qweather.com/v7/weather/now?location=101010100&key=06ea91a7abc14780b8b70fd701d1bf5d'
    }
  },
  components: { Date, Weather }
}
</script>

<style>
.date-weather {
  font-size: 13px;
  display: flex;
  align-items: center;
  text-align: center;
}

</style>
