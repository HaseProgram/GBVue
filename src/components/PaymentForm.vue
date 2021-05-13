<template>
  <div>
    <input placeholder="Date" v-model="date" />
    <input placeholder="Category" v-model="category" />
    <input placeholder="Price" v-model.number="price" />
    <button @click="save">Save</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      date: '',
      category: '',
      price: 0
    }
  },
  props: {
    items: Array
  },
  methods: {
    save () {
      const { date, category, price } = this
      this.$emit('add', { date, category, price })
    }
  }
}
</script>

<style>

</style>
