<template>
  <div>
    <textarea resize="none" rows="15" style="width: 550px;position: relative;z-index: 1;" />
    <el-button class="filter-item" type="primary" @click="addWhite">留言</el-button>
  </div>
</template>

<script>
export default ({
  name: 'Board',
  methods: {
    addWhite () {
      console.log('aaa')
    }
  }
})
</script>

<style scoped>

</style>
