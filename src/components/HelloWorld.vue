<template>
  <div class="hello">
    fib (<input v-model.number="operand1" />)
    fib (<input v-model.number="operand2" />)
    = {{ result }}
    <div>
      <button
        v-for="op in operations"
        :key="op"
      @click="calculate(op)"
      >{{ op }}</button>
    </div>

    <div class="error" v-if="error">
      {{ error }}
    </div>

    <div v-if="result < 0">
      Получилось отрицательное число
    </div>
    <div v-else-if="result <= 1000">
      Результат леждит в пределах 0..1000
    </div>
    <div v-else-if="result <= 100000">
      Результат леждит в пределах 1000..100000
    </div>
    <div v-else>
      Результат слишком большой!
    </div>
    <div class="logs">
      <div v-for="(log, id) in logs" :key="id">{{ log }}</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data: () => ({
    operand1: 0,
    operand2: 0,
    result: 0,
    error: '',
    operations: ['+', '-', '/', '*'],
    logs: {}
  }),
  props: {
  },
  methods: {
    fib (n) {
      return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2)
    },
    calculate (op) {
      const operand1 = this.fib1
      const operand2 = this.fib2
      Vue.set(this.logs, Date.now(), `${operand1}${op}${operand2}=?`)

      if (op === '/' && operand2 === 0) {
        this.error = 'Division by zero!'
        return
      }

      event.preventDefault()

      const calcOperations = {
        '+': () => operand1 + operand2,
        '-': () => operand1 - operand2,
        '/': () => operand1 / operand2,
        '*': () => operand1 * operand2
      }
      this.result = calcOperations[op]()
    },
    sum () {
      this.result = this.operand1 + this.operand2
    },
    sub () {
      this.result = this.operand1 - this.operand2
    },
    div () {
      this.result = this.operand1 / this.operand2
    },
    mul () {
      this.result = this.operand1 * this.operand2
    }
  },
  computed: {
    fib1 () {
      return this.fib(this.operand1)
    },
    fib2 () {
      return this.fib(this.operand2)
    }
  },
  watch: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.error {
  padding: 20px;
  border: 1px solid red;
}
</style>
