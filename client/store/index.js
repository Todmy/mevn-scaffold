import auth from './auth'
import tasks from './tasks'

export default {
  modules: {
    auth,
    tasks,
  },

  actions: {
    nuxtServerInit({ state, dispatch }, options) {
      this.dispatch('auth/init', options.req)
    }
  }
}