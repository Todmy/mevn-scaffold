<template>
  <div class="list">
    <div class="actions">
      <a
        class="button--green"
        href="/tasks/new"
      >
        Add New
      </a>
    </div>

    <TaskList
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
