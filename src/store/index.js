import Vue from 'vue'
import Vuex from 'vuex'

import task from './Task.js'
import allTasks from './AllTasks'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      task,
      allTasks
    }
  })

  return Store
}
