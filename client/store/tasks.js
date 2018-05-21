export default {
  namespaced: true,

  state: () => ({
    entities: []
  }),

  actions: {
    // TODO: think how to integrate deeply mongodb requests to store init
    init({ state, commit, dispatch }) {

    },
    create({ state, commit, dispatch }) {
      return this.$axios.$post('/tasks', data)
        .then(resp => commit('addEntities', resp))
    },
    remove({ state, commit, dispatch }) {
      return this.$axios.$delete('/tasks', data)
        .then(resp => commit('removeEntities', resp))
    },
  },

  mutations: {
    removeEntities(state, data) {
      const ind = state.findIndex(elem => elem._id === data._id)
      state.entities.splice(ind, 1)
    },
    addEntities(state, data) {
      state.entities.push(data)
    }
  }
}