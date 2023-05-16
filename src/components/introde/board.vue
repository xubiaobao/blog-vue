<template>
  <div style="position: relative;">
    <!-- <el-input type="textarea" v-model="content" style="min-height: 100px;"></el-input> -->
    <textarea
      id='content'
      autocomplete="off"
      v-model="content"
      class="el-textarea__inner"
      @mouseenter="stretch()"
      @mouseleave="shorten()">
    </textarea>
    <el-button type="primary" class="publish">发表</el-button>
  </div>
</template>

<script>
import { getMsg } from '../../api/message'

export default {
  name: 'board',
  mounted () {
    this.test()
  },
  data () {
    return {
      content: ''
    }
  },
  methods: {
    test () {
      getMsg().then(res => {
        console.log(res)
      })
    },
    stretch () {
      document.getElementById('content').style.height = '100px'
      document.getElementById('content').classList.add('stretch')
      document.getElementById('content').classList.remove('shorten')
    },
    shorten () {
      document.getElementById('content').style.height = '40px'
      document.getElementById('content').classList.remove('stretch')
      document.getElementById('content').classList.add('shorten')
    }
  }
}
</script>

<style>
.el-textarea__inner {
  resize: none;
  height: 40px;
}

.publish {
  bottom: 0;
  right: 2%;
  scale: 0.8;
  position: absolute;
}

.stretch {
  animation: stretch 0.5s;
}

@keyframes stretch {
  0% {
    height: 40px;
  }
  to {
    height: 100px;
  }
}

.shorten {
  animation: shorten 0.5s;
}

@keyframes shorten {
  0% {
    height: 100px;
  }
  to {
    height: 40px;
  }
}
</style>
