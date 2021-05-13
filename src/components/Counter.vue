<template>
  <button>Clicked {{ counter }} times {{ data }}</button>
</template>

<script>
export default {
  data () {
    return {
      counter: 0,
      data: null
    }
  },
  methods: {
    onClick () {
      this.counter++
    },
    fetchData () {
      this.data = { status: 200 }
    }
  },
  beforeCreate () {
    console.log('Before create called')
  },
  created () {
    this.fetchData()
  },
  beforeMount () {
    console.log('Before mount')
  },
  mounted () {
    console.log('Mounted')
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  beforeDestroy () {
    console.log('Before destroy')
    window.data = false
  },
  destroyed () {
    console.log('Destroyed')
  }
}
</script>

<style>

</style>
