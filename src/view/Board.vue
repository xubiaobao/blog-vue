<template>
  <div class="board">
    <div class="background">
      <textarea resize="none" rows="15" class="message" />
      <el-button class="filter-item board-button" type="primary" @click="addWhite">留言</el-button>
    </div>
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
.board {
  height: 100%;
  padding-left: 220px;
  padding-right: 220px;
  background: black;
}

.board .background{
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: rgb(196, 193, 193);
}

.message {
  width: 600px;
  position: absolute;
  z-index: 1;
  resize: none;
  outline: none;
  bottom: 0px;
  border:solid 1px #ccc;
}

.board-button{
  position: absolute;
  z-index: 1;
  bottom: 20px;
  right: 405px;
}
</style>
