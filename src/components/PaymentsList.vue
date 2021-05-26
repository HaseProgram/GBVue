<template>
  <div>
    <div
      v-for="(item, index) in currentElements"
      :key="index"
    >
      {{ item }}
    </div>
    <Pagination
      :length="getPaymentsList.length"
      :n="n"
      :cur="page"
      @paginate="onPgaginate"
    />
    <button @click="showPaymentsForm">Show Payments Form</button>
    <button @click="closePaymentsForm">Close Payments Form</button>
  </div>
</template>

<script>
import Pagination from './Pagination'
import { mapGetters } from 'vuex'
export default {
  components: {
    Pagination
  },
  data () {
    return {
      page: 1,
      n: 10
    }
  },
  methods: {
    doSomething () {
      console.log(this.items)
    },
    onPgaginate (p) {
      this.page = p
    },
    showPaymentsForm () {
      this.$modal.show('PaymentForm')
    },
    closePaymentsForm () {
      this.$modal.close()
    }
  },
  computed: {
    ...mapGetters([
      'getPaymentsList'
    ]),
    currentElements () {
      const { n, page } = this
      return this.getPaymentsList.slice(n * (page - 1), n * (page - 1) + n)
    }
  }
}
</script>

<style>

</style>
