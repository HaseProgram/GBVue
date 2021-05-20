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
