export default {
  namespaced: true,

  state: () => ({
    session: {}
  }),

  actions: {
    login({ state, dispatch, commit }, data) {
      return this.$axios.$post('/auth/login', data)
        .then(resp => commit('updateSession', resp))
        .then(() => this.$router.replace({ path: '' }))
    },
    signin({ state, dispatch }, data) {
      return this.$axios.$post('/auth/signin', data)
        .then(resp => commit('updateSession', resp))
        .then(() => this.$router.replace({ path: '' }))
    },
  },

  mutations: {
    updateSession(state, data) {
      state.session = data
    }
  }
}