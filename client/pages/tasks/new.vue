<template>
  <div class="list">
    <a
      href="/tasks"
      class="link button--grey"
    >
      Cancel
    </a>
    <TaskForm
      :task="task"
      @add="create"
    />
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    components: {
      TaskList
    },
    data: () => ({
      task: {}
    }),
    // TODO: think about do it in middlewares
    mounted() {
      if (!this.isAuthenticated) {
        this.$router.replace({ path: '/auth' })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .list {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20%;
    flex-direction: column;

    .actions {
      display: flex;
      flex-direction: row;
      > * {
        margin: 10px;
      }
    }
  }
</style>
