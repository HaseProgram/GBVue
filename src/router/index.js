import Vue from 'vue'
import Router from 'vue-router'

// import PageDashboard from '../components/pages/PageDashboard'
// import PageAbout from '../components/pages/PageAbout'
// import Page404 from '../components/pages/Page404'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../components/pages/PageDashboard')
    },
    {
      path: '/dashboard/:page',
      name: 'dashboard',
      component: () => import('../components/pages/PageDashboard')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/pages/PageAbout')
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import('../components/pages/Page404')
    }
  ]
})

// const userAuth = false

// router.beforeEach((to, from, next) => {
//   if (to.name === 'dashboard' && !userAuth) {
//     next({ name: 'NotFound' })
//   } else {
//     next()
//   }
// })

const titles = {
  dashboard: 'Welcome to Dashboard!',
  about: 'About us',
  NotFound: 'Page not found!'
}

router.afterEach((to, from) => {
  document.title = titles[to.name]
})

export default router
