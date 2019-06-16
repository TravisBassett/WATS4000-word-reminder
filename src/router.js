//importing .vue and .js files for the project
import Vue from 'vue'
import Router from 'vue-router'
import landing from '@/views/landing'
import associatedwithsearch from '@/views/associatedwithsearch'
import describedbysearch from '@/views/describedbysearch'
import wordcompletionsearch from '@/views/wordcompletionsearch'

Vue.use(Router)

//setting up a router and including routes to all 4 pages on the site
export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing.vue',
      component: landing
    },
    {
      path: '/associatedwithsearch',
      name: 'associatedwithsearch',
      component: associatedwithsearch
    },
    {
      path: '/describedbysearch',
      name: 'describedbysearch',
      component: describedbysearch
    },
    {
      path: '/wordcompletionsearch',
      name: 'wordcompletionsearch',
      component: wordcompletionsearch
    }
  ]
})
