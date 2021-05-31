<template>
  <div :class="[$style.app]">
    <transition name="fade">
      <Modal v-if="modalShown" :name="modalShown"/>
    </transition>

    <header class="header">
      My personal costs
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/404">404</router-link>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>

// import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Modal: () => import('./components/modalwindows/Modal')
  },
  data () {
    return {
      modalShown: false
    }
  },
  methods: {
    // ...mapActions([
    //   'fetchData'
    // ]),
    onDataAdded (data) {
      this.paymentsList.push(data)
    },
    onShown ({ name }) {
      this.modalShown = name
    },
    onClose () {
      this.modalShown = ''
    }
  },
  mounted () {
    // this.fetchListData(2)
    this.$modal.EventBus.$on('show', this.onShown)
    this.$modal.EventBus.$on('close', this.onClose)
  },
  beforeDestroy () {
    this.$modal.EventBus.$off('show', this.onShown)
    this.$modal.EventBus.$off('close', this.onClose)
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

<style lang="scss" module>
.header {
  color: red;
}

html, body, .app {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
}

// :global(.fade-enter-active), :global(.fade-leave-active) {
//   transition: opacity 1s;
// }

// :global(.fade-enter), :global(.fade-leave-to) {
//   opacity: 0;
// }
</style>
