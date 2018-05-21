export default {
  namespaced: true,

  state: () => ({
    session: {}
  }),

  getters: {
    isAuthenticated({ session }) {
      return session && session._id
    }
  },

  actions: {
    login({ commit }, data) {
      return this.$axios.$post('/auth/login', data)
        .then(resp => commit('updateSession', resp))
        .then(() => this.$router.replace({ path: '/' }))
    },
    signin({ commit }, data) {
      return this.$axios.$post('/auth/signin', data)
        .then(resp => commit('updateSession', resp))
        .then(() => this.$router.replace({ path: '/' }))
    },
    logout({ commit }) {
      return this.$axios.$post('/auth/logout')
        .then(resp => commit('updateSession', {}))
        .then(() => this.$router.replace({ path: '/auth' }))
    },
    init({ commit }, req) {
      commit('updateSession', req.user || {})
    }
  },

  mutations: {
    updateSession(state, data) {
      state.session = data
    }
  }
}