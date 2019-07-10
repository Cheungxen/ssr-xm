const state = {
  count: 1
}

const mutations = {
  add(state, val) {
    state.count += val
  }
}

const actions = {
  add(ctx, val) {
    ctx.commit('add', val)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
