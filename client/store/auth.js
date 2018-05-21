export default {
  namespaced: true,

  state: () => ({
    session: {}
  }),

  actions: {
    login({ dispatch, commit }, data) {
      return this.$axios.$post('/auth/login', data)
        .then(resp => commit('updateSession', resp))
        .then(() => this.$router.replace({ path: '' }))
    },
    signin({ dispatch, commit }, data) {
      return this.$axios.$post('/auth/signin', data)
        .then(resp => commit('updateSession', resp))
        .then(() => this.$router.replace({ path: '' }))
    },
    init({ commit }, { req }) {
      commit('updateSession', req.data)
    }
  },

  mutations: {
    updateSession(state, data) {
      state.session = data
    }
  }
}