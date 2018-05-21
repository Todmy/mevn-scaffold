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
      return this.$axios.$get('/tasks')
        .then(resp => commit('addEntities', resp))
    },
    create({ commit }, data) {
      return this.$axios.$post('/tasks', data)
    },
    remove({ commit }, _id) {
      return this.$axios.$delete('/tasks', { params: { _id } })
        .then(resp => commit('removeEntities', resp))
    },
  },

  mutations: {
    removeEntities(state, data) {
      const ind = state.entities.findIndex(elem => elem._id === data._id)
      
      state.entities.splice(ind, 1)
    },
    addEntities(state, data) {
      if (!Array.isArray(data)) {
        state.entities.push(data)
      } else {
        state.entities = state.entities.concat(data)
      }
    }
  }
}