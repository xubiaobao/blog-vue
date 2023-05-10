<template>
  <div class='box'>
    <p class='boxDate'>{{ dateYear }}</p>
    <p class='boxTime'>{{ dateDay }}</p>
  </div>
 </template>

<script>
import dayjs from 'dayjs'

export default {
  data () {
    return {
      dateDay: null,
      dateYear: null,
      timer: null
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      const date = dayjs(new Date())
      this.dateDay = date.format('HH:mm:ss')
      this.dateYear = date.format('YYYY-MM-DD')
    }, 1000)
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
}

.boxTime{
  margin: 0 15px;
}
</style>
