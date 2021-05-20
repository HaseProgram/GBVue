import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: []
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentsList = payload
    }
  },
  getters: {
    getPaymentsList: state => state.paymentsList,
    getPaymentsListFullPrice: state => {
      return state.paymentsList
        .reduce((res, cur) => res + cur.price, 0)
    }
  },
  actions: {
    fetchData ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const items = []
          for (let i = 1; i < 105; i++) {
            items.push({
              date: '13.05.2021',
              category: 'Education',
              price: i
            })
          }
          resolve(items)
        }, 2000)
      })
        .then(res => {
          commit('setPaymentsListData', res)
        })
    }
  }
})
