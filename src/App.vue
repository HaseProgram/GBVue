<template>
  <div id="app">
    <header class="header">
      My personal costs
      <a href="#dashboard">Dashboard</a>
      <a href="#about">About</a>
      <a href="#404">404</a>
    </header>
    <main>
      <PageDashboard v-if="page === 'dashboard'" />
      <PageAbout  v-if="page === 'about'" />
      <Page404  v-if="page === '404'" />
    </main>
  </div>
</template>

<script>
import PageDashboard from './page/PageDashboard'
import PageAbout from './page/PageAbout'
import Page404 from './page/Page404'

export default {
  name: 'App',
  components: {
    PageDashboard,
    PageAbout,
    Page404
  },
  data () {
    return {
      page: 'dashboard'
    }
  },
  methods: {
    setPage () {
      this.page = location.hash.slice(1)
    }
  },
  mounted () {
    this.setPage()
    window.addEventListener('hashchange', () => {
      this.setPage()
    })
  }
}
</script>

<style lang="scss" module>
.header {
  color: red;
}
</style>
