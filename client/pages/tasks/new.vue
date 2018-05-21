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
  import { mapActions } from 'vuex'
  import TaskForm from '~/components/TaskForm'

  export default {
    components: {
      TaskForm
    },
    middleware: 'auth',
    data: () => ({
      task: {}
    }),
    methods: {
      ...mapActions('tasks', [
        'create',
      ]),
      createAndRedirect(data) {
        this.create(data)
        this.$router.replace({ path: '/tasks' })
      },
    },
  }
</script>

<style lang="scss" scoped>
  .container {
    .link {
      margin: 10px;
    }
  }
</style>
