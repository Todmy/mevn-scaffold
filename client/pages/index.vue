<template>
  <section class="container">
    <div>
      <h1 class="title">
        Simple MEVN project
      </h1>
      <app-logo/>
      <div class="links">
        <template v-if="session && session._id">
          <a
            href="/tasks"
            class="link button--green"
          >
            Tasks
          </a>
          <a
            href="/users"
            class="link button--green"
          >
            Users
          </a>
          <button
            class="link button--grey"
            @click="logout"
          >
            Logout
          </button>
        </template>
        <template v-else>
          <a
            href="/auth"
            class="link button--green"
          >
            Login
          </a>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
// TODO: figure out why getters don't work as expected
import { mapState, mapActions } from 'vuex'
import AppLogo from '~/components/AppLogo'

export default {
  components: {
    AppLogo
  },
  computed: {
    ...mapState('auth', [
      'session',
    ])
  },
  methods: {
    ...mapActions('auth', [
      'logout',
    ])
  }
}
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  padding-bottom: 50px;
}

.links {
  padding-top: 50px;
  display: flex;
  justify-content: center;

  .link {
    margin: 20px;
  }
}
</style>
