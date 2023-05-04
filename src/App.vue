<template>
  <div id="app">
    <transition :name='transitionName'>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  watch: {
    '$route' (to, from) {
      this.transitionName = to.name === 'Home' ? 'slide-right' : 'slide-left'
    }
  },
  data () {
    return {
      transitionName: 'slide-left'
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
}
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
