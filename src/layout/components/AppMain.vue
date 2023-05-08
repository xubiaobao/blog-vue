<template>
  <transition :name='transitionName'>
    <router-view :key="key"/>
  </transition>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key () {
      return this.$route.path
    }
  },
  watch: {
    '$route' (to, from) {
      if (from.name !== null && from.name !== undefined) {
        this.transitionName = to.name === 'Home' ? 'slide-right' : 'slide-left'
      }
    }
  },
  data () {
    return {
      transitionName: ''
    }
  }
}
</script>

<style>
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  width: 100%;
  position: absolute;
  will-change: transform;
  transition: all 500ms ease-out;
}

.slide-right-enter {
  transform: translate3d(0, -100%, 0);
}

.slide-right-leave-active {
  transform: translate3d(0, 0, 0);
}

.slide-left-enter {
  transform: translate3d(0, 100%, 0);
}

.slide-left-leave-active {
  transform: translate3d(0, 0, 0);
}
</style>
