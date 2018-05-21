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

    <List
      class="list"
      :type="listFor"
      :items="entities"
      @remove="remove"
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
      listFor: 'task'
    }),
    computed: {
      ...mapState('tasks', [
        'entities',
      ]),
    },
    methods: {
      ...mapActions('tasks', [
        'remove',
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

      a {
        margin: 10px;
      }
    }
  }
</style>
