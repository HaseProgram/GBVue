<template>
  <div>
    <div
      v-for="(item, index) in currentElements"
      :key="index"
    >
      {{ item }}
    </div>
    <Pagination
      :length="12"
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
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    Pagination
  },
  data () {
    return {
      page: 1,
      n: 3
    }
  },
  methods: {
    ...mapActions({
      fetchListData: 'fetchData'
    }),
    doSomething () {
      console.log(this.items)
    },
    onPgaginate (p) {
      this.page = p
      this.fetchListData(p)
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
  },
  mounted () {
    this.fetchListData(this.page)
  }
}
</script>

<style>

</style>
