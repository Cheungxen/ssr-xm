import Vue from 'vue'
import Vuex from 'vuex'

import address from './module/address'
import a from './module/a'
import cart from './module/cart'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
      address,
      a,
      cart
    }
})

export default () => store
