import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'
import helpers from './helpers'

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
  helpers
})