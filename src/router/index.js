import Vue from 'vue'
import Router from 'vue-router'

import PageDashboard from '../page/PageDashboard'
import PageAbout from '../page/PageAbout'
import Page404 from '../page/Page404'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: PageDashboard
    },
    {
      path: '/dashboard/:page',
      name: 'dashboard',
      component: PageDashboard
    },
    {
      path: '/about',
      name: 'about',
      component: PageAbout
    },
    {
      path: '*',
      name: 'NotFound',
      component: Page404
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
