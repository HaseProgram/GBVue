<template>
  <div>
    <!-- <div
      v-for="(item, index) in currentElements"
      :key="index"
    >
      {{ item }}
    </div> -->
    <v-data-table
      :headers="tableHeaders"
      :items="listWithIndex"
    >
    </v-data-table>
    <!-- <Pagination
      :length="13"
      :n="n"
      :cur="page"
      @paginate="onPgaginate"
    /> -->
  </div>
</template>

<script>
// import Pagination from './Pagination'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    // Pagination
  },
  data () {
    return {
      page: 1,
      n: 3,
      tableHeaders: [
        { text: '#', value: 'index' },
        { text: 'Date', value: 'date' },
        { text: 'Category', value: 'category' },
        { text: 'Value', value: 'value' }
      ]
    }
  },
  methods: {
    ...mapActions({
      fetchListData: 'fetchData'
    }),
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
    listWithIndex () {
      return this.getPaymentsList.map((obj, i) => {
        obj.index = i + 1
        return obj
      })
    },
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
