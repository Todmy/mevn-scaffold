<template>
  <div class="container">
    <div class="actions">
      <a
        class="button--grey"
        href="/"
      >
        HOME
      </a>
      <div class="info">
        <div>
          <b>Username: </b> {{ session.username }}
        </div>
        <div>
          <b>Age: </b> {{ session.age }}
        </div>
      </div>
    </div>

    <hr class="divider" />

    <List
      class="list"
      :type="listFor"
      :items="entities"
    />
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import List from '~/components/List'

  export default {
    components: {
      List
    },
    middleware: 'auth',
    data: () => ({
      listFor: 'user'
    }),
    computed: {
      ...mapState('users', [
        'entities',
      ]),
      ...mapState('auth', [
        'session',
      ]),
    },
    methods: {
      ...mapActions('users', [
        'init',
      ]),
    },
    created() {
      this.init()
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    .actions {
      display: flex;
      justify-content: space-between;
      align-items: center;

      a, .info {
        margin: 10px;
      }
    }
  }
</style>
