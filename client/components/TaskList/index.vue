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
