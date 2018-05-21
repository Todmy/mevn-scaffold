export default {
  namespaced: true,

  state: () => ({
    entities: []
  }),

  actions: {
    // TODO: think how to integrate deeply mongodb requests to store init
    init({ state, dispatch }) {
      dispatch('getAll')
    },
    getAll({ commit }, data) {
      return this.$axios.$get('/users')
        .then(resp => commit('addEntities', resp))
    },
  },

  mutations: {
    addEntities(state, data) {
      state.entities = data
    }
  }
}