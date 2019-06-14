import Vue from 'vue'
import Router from 'vue-router'
import landing from '@/views/landing'
import associatedwithsearch from '@/views/associatedwithsearch'
// TODO: Import new component
import describedbysearch from '@/views/describedbysearch'
import wordcompletionsearch from '@/views/wordcompletionsearch'

Vue.use(Router)

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
    // TODO: Add new route definition here.
  ]
})
