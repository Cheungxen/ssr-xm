const state = {
  location: {},
  chooseRegion: {},
  count: 0
}

const mutations = {
  setLocation(state, val) {
    state.location = val
  },
  chooseRegion(state, val) {
      state.chooseRegion = val
  },
  add(state, val) {
      state.count += val
  }
}

const actions = {
  setLocation(ctx, val) {
    ctx.commit('setLocation', val)
  },
  chooseRegion(ctx, val) {
      ctx.commit('chooseRegion', val)
  },
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
