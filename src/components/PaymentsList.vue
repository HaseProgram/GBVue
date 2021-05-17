<template>
  <div>
    <div v-for="(item, index) in getPaymentsList" :key="index">
      {{ item }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    doSomething () {
      console.log(this.items)
    }
  },
  computed: {
    ...mapGetters([
      'getPaymentsList'
    ])
  }
}
</script>

<style>

</style>
