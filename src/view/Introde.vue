<template>
  <div class="wrapper">
      <div class="inner-left">
        <img src="../../static/mine.jpg">
        <span class="title">寻人启事</span>
        <div class="content markdown-body"  v-html="content"></div>
      </div>
      <div class="inner-right">
        <div class="roll-title">
          <span>&nbsp;&nbsp;弹幕互动</span>
          <i class="el-icon-arrow-right" style="color:#9195A3;"/>
        </div>
        <div class="word-roll">
          <div class="shade"></div>
          <word-roll></word-roll>
        </div>
        <div class="board">
          <board></board>
        </div>
      </div>
  </div>
</template>

<script>
import wordRoll from '../components/introde/wordRoll.vue'
import board from '../components/introde/board.vue'
import { marked } from 'marked'
import 'github-markdown-css'

export default {
  name: 'Introde',
  data () {
    return {
      textData: '<font color="#FFFFFF">**姓名： 豹**<br> ' +
      '**性别： 男**<br>' +
      '**惯籍： 广东**<br>' +
      '**身高： 185cm（大约）**<br>' +
      '**特征： 酷似吴彦祖**<br>' +
      '<br>***走失者特征:***<br><br>' +
      '&emsp;&emsp;该帅哥于广东某地因众多女粉丝围堵，慌忙逃命致使失联，众女粉丝寻找未果，若遇见此人，' +
      '请在该网站留言板留下您的线索，我们将望给予丰厚的报酬（帅哥十年未洗的裤子一份），望周知！<br><br>' +
      '***警告***<br><br>' +
      '&emsp;&emsp;请无关人士及妒嫉的众人放下手中的锤子</font>'
    }
  },
  components: { wordRoll, board },
  computed: {
    content () {
      return marked(this.textData)
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items:center;
  background: black;
}

.inner-left {
  width: 75%;
  height: 80%;
  position: relative;
}

.inner-right {
  width: 20%;
  height: 60%;
  z-index: 1;
  top:0%;
  background: white;
}

.inner-left img:first-child {
  width: 15%;;
  float: left;
  padding-top:2%;
  padding-left: 2%;
}

.title {
  color: rgb(141, 41, 41);
  font-family: youshebiaotihei;
  font-size: calc(50vw * 100 / 1920);
}

.content {
  width: 77%;
  height: 80%;
  float: right;
  text-align: left;
  position: relative;
  background: black;
  padding-right: 2%;
  font-size: calc(25vw * 100 / 1920);
}

.roll-title {
  width: 100%;
  height: 7%;
  text-align: left;
  display: flex;
  align-items: center;
  font-size: calc(28vw * 100 / 1920);
}

.roll-title span {
  font-weight: 800;
}

.word-roll {
  top: 0;
  width: 100%;
  height: 45%;
  overflow: hidden;
  position: relative;
}

.shade {
  top: 0;
  z-index: 1;
  width: 100%;
  height: 35px;
  position: absolute;
  background: linear-gradient(180deg,#fff,hsla(0,0%,100%,0));
}

.board {
  width: 100%;
  height: 35%;
}
</style>
