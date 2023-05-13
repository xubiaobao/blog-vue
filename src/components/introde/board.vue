<template>
  <div style="position: relative;">
    <el-input type="textarea"></el-input>
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
  methods: {
    test () {
      getMsg().then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style>
.el-textarea__inner {
  resize: none;
}

.publish {
  bottom: 0;
  right: 1%;
  position: absolute;
}
</style>
