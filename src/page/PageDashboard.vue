<template>
  <div>
    <PaymentForm />
    <PaymentsList />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import PaymentForm from '../components/PaymentForm'
import PaymentsList from '../components/PaymentsList'

export default {
  components: {
    PaymentForm,
    PaymentsList
  },
  methods: {
    ...mapActions({
      fetchListData: 'fetchData'
    })
  },
  mounted () {
    this.fetchListData()
  }
}
</script>

<style>

</style>
