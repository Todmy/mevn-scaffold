<template>
  <div class="list">
    <div
      v-if="!tasks.length"
      class="list-empty"
    >
    <p>There is no tasks</p>
    </div>

    <div 
      v-else
      class="list-filled"
    >
      <TaskListItem 
        v-for="(task, index) in tasks"
        :key="index"
        :item="task"
        @remove="$emit('remove', $event)"
      />
    </div>
  </div>
</template>

<script>
import TaskListItem from './Item'

export default {
  name: 'TaskList',
  components: {
    TaskListItem,
  },
  props: {
    tasks: {
      type: Array,
      default: () => []
    }
  }
}

</script>

<style lang="scss" scoped>
  .list {
    padding: 20px;
    &-empty {
      font-size: 1.5em;
      text-transform: uppercase;
      color: lightslategray;
      text-align: center;
    }
    &-filled {
      font-size: 0.8em;
    }
  }
</style>
