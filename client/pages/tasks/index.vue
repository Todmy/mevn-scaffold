<template>
  <div class="container">
    <div class="actions">
      <a
        class="button--grey"
        href="/"
      >
        HOME
      </a>
      <a
        class="button--green"
        href="/tasks/new"
      >
        Add New
      </a>
    </div>

    <hr class="divider" />

    <TaskList
      class="list"
      :tasks="entities"
      @remove="remove"
    />
  </div>
</template>

<script>
  import { mapActions, mapState, mapGetters } from 'vuex'
  import TaskList from '~/components/TaskList'

  export default {
    components: {
      TaskList
    },
    computed: {
      ...mapState('tasks', [
        'entities',
      ]),
      ...mapGetters('auth', [
        'isAuthenticated',
      ])
    },
    methods: {
      ...mapActions('tasks', [
        'remove',
        'init',
      ]),
    },
    // TODO: think about do it in middlewares
    mounted() {
      if (!this.isAuthenticated) {
        this.$router.replace({ path: '/auth' })
      }
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

      a {
        margin: 10px;
      }
    }
  }
</style>
