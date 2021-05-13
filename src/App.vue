<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Привет VueJS!" /> -->
    <div v-if="flag">
      <Counter />
    </div>
    <main v-else>
      <Counter />
    </main>
    <button @click="onChange">Change</button>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'

export default {
  name: 'App',
  components: {
    Counter
  },
  data () {
    return {
      flag: true
    }
  },
  methods: {
    onChange () {
      console.log('Changed!')
      this.flag = !this.flag
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
