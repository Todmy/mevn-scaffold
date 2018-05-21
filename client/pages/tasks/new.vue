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
      @add="create"
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
