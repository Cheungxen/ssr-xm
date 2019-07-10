const state = {
  cart: []
}

const mutations = {
  push(state, newProd) {
    state.cart.push(newProd)
  }
}

const actions = {
  push(ctx, newProd) {
    ctx.commit('push', newProd)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
