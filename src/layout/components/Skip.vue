<template>
  <div ref='skip' id='skip' class='skip rise' @click="nextJump()">
    <i class="el-icon-bottom"></i>
  </div>
</template>

<script>
export default{
  name: 'Skip',
  watch: {
    '$route' (to, from) {
      if (from.name !== null && from.name !== undefined) {
        this.hideSkip()
        const className = to.meta.index > from.meta.index ? 'fall' : 'rise'
        setTimeout(() => {
          this.fall(className)
        }, 500)
      }
    }
  },
  methods: {
    hideSkip () {
      this.$refs.skip.style.opacity = 0
      document.getElementById('skip').classList.remove('rise')
      document.getElementById('skip').classList.remove('fall')
    },
    fall (className) {
      this.$refs.skip.style.opacity = 1
      document.getElementById('skip').classList.add(className)
    },
    nextJump () {
      const next = this.$route.meta.next
      if (next !== undefined && next !== '') {
        this.$router.push({ path: next })
      }
    }
  }
}
</script>

<style>
.skip {
  right: 2%;
  bottom: 20%;
  width: 50px;
  height: 50px;
  z-index: 9999;
  display: flex;
  background: black;
  position: absolute;
  align-items: center;
  justify-content: center;
}

.skip i {
  color: white;
  font-size: 30px;
}

/* 下坠动画 */
.fall {
  animation: fall 500ms 0ms;
}

@keyframes fall {
  0% {
    bottom: 100%;
  }
  100% {
    bottom: 20%;
  }
}

/* 上升动画 */
.rise {
  animation: rise 500ms 0ms;
}

@keyframes rise {
  0% {
    bottom: 0%;
  }
  100% {
    bottom: 20%;
  }
}
</style>
