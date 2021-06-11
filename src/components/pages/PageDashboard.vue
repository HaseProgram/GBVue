<template>
  <v-row>
    <v-col>
      <div class="text-h5 text-md-h3 my-8">My personal costs</div>
      <v-dialog
        v-model="pfs"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            color="teal"
            v-on="on"
            dark
          >
            ADD PAYMENT <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-card>
          <PaymentForm />
        </v-card>
      </v-dialog>
      <PaymentsList />
    </v-col>
    <v-col>Dialog</v-col>
  </v-row>
</template>

<script>
import PaymentsList from '../PaymentsList'
import PaymentForm from '../PaymentForm'

export default {
  components: {
    PaymentsList,
    PaymentForm
  },
  data () {
    return {
      pfs: false
    }
  }
}
</script>

<style>

</style>
