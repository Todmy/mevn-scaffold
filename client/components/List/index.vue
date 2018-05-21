<template>
  <div class="list">
    <div
      v-if="!items.length"
      class="list-empty"
    >
    <p>There is no {{this.type}}s</p>
    </div>

    <div 
      v-else
      class="list-filled"
    >
      <component
        :is="itemComponent" 
        v-for="(item, index) in items"
        :key="index"
        :item="item"
        @remove="$emit('remove', $event)"
      />
    </div>
  </div>
</template>

<script>
import TaskListItem from './TaskItem'
import UserListItem from './UserItem'

export default {
  name: 'List',
  components: {
    TaskListItem,
    UserListItem,
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    type: String
  },
  computed: {
    itemComponent() {
      const capitalized = this.type[0].toUpperCase() + this.type.slice(1).toLowerCase()
      return `${capitalized}ListItem`
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
