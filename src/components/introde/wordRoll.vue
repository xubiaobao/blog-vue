<template>
  <vue-seamless-scroll :data="listData" :class-option="classOption" class="warp">
    <ul class="item">
      <li v-for="(item, index) in listData" :key="index">
        <span class="title" v-text="item.content"></span>
      </li>
    </ul>
  </vue-seamless-scroll>
</template>

<script>
import VueSeamlessScroll from 'vue-seamless-scroll'

export default {
  name: 'wordRoll',
  components: { VueSeamlessScroll },
  data () {
    return {
      listData: [{
        'content': '是真的，我看过！'
      }, {
        'content': '他好帅的，世界上怎么会有这么帅的人'
      }, {
        'content': '如果我是女的我都想嫁给他'
      }, {
        'content': '这么帅，居然敢在大街上走，不怕堵车吗'
      }, {
        'content': '貌比潘安说的就是他吧！'
      }, {
        'content': '同求，赏金十万寻求帅哥行踪'
      }, {
        'content': '&￥&（）……&%……￥#*）*'
      }, {
        'content': '啊~~太帅了'
      }, {
        'content': '如果我也能这么帅就好了'
      }],
      classOption: { step: 1, limitMoveNum: 3 }
    }
  }
}
</script>

<style lang="scss" scoped>
.warp {
    height: 100%;
    padding: 0 5%;
    margin: 0 auto;
    overflow: hidden;
    ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    li{
        float: left;
        width: 100%;
        font-size: 13px;
        overflow: hidden;
        margin-top: 12px;
        line-height: 30px;
        background: #f1f3fd;
        text-overflow: ellipsis;
        .title {
          float: left;
          margin-left: 10px;
          white-space: nowrap;
        }
      }
    }
}
</style>
