import Vue from 'vue'
import Router from 'vue-router'
import Rhymesaurus from '@/views/Rhymesaurus'
// TODO: Import new component
import Adjfornoun from '@/views/Adjfornoun'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Rhymesaurus',
      component: Rhymesaurus
    },
    {
      path: '/adjfornoun',
      name: 'adjfornoun',
      component: Adjfornoun
    }
    // TODO: Add new route definition here.
  ]
})
