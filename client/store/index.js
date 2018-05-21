import auth from './auth'

export default {
  modules: {
    auth
  },

  actions: {
    nuxtServerInit({ state, dispatch }, options) {
      this.dispatch('auth/init', options.req)
    }
  }
}