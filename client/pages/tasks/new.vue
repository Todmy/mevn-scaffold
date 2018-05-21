<template>
  <div class="container">
    <a
      href="/tasks"
      class="link button--grey"
    >
      Cancel
    </a>
    <hr class="divider" />
    <TaskForm
      :task="task"
      @add="createAndRedirect"
    />
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import TaskForm from '~/components/TaskForm'

  export default {
    components: {
      TaskForm
    },
    data: () => ({
      task: {}
    }),
    computed: {
      ...mapGetters('auth', [
        'isAuthenticated'
      ]),
    },
    methods: {
      ...mapActions('tasks', [
        'create',
      ]),
      createAndRedirect(data) {
        this.create(data)
        this.$router.replace({ path: '/tasks' })
      },
    },
    // TODO: think about do it in middlewares
    mounted() {
      if (!this.isAuthenticated) {
        this.$router.replace({ path: '/auth' })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    .link {
      margin: 10px;
    }
  }
</style>
