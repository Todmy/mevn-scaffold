<template>
  <div class="list">
    <div
      v-if="!tasks.length"
      class="list-empty"
    >
    <p>There is no tasks</p>
    </div>

    <ul 
      v-else
      class="list-filled"
    >
      <li 
        v-for="(task, index) in tasks"
        :key="index"
      >{{ task }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TaskList',
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
    &-empty {
      font-size: 0.8em;
    }
    &-filled {
      font-size: 0.8em;
    }
  }
</style>
