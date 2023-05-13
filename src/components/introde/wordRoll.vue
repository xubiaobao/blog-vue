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
        'content': '无缝滚动第一行无缝滚动第一行无缝滚动第一行无缝滚动第一行'
      }, {
        'content': '无缝滚动第二行无缝滚动第二行'
      }, {
        'content': '无缝滚动第三行无缝滚动第三行'
      }, {
        'content': '无缝滚动第四行无缝滚动第四行'
      }, {
        'content': '无缝滚动第五行无缝滚动第五行'
      }, {
        'content': '无缝滚动第六行无缝滚动第六行'
      }, {
        'content': '无缝滚动第七行无缝滚动第七行'
      }, {
        'content': '无缝滚动第八行无缝滚动第八行'
      }, {
        'content': '无缝滚动第九行无缝滚动第九行'
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
