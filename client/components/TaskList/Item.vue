<template>
  <div class="item">
    <div class="item-body">
      <div class="item-body-heading">{{ item.name }}</div>
      <div class="item-body-info">{{ item.description || '&lt;no description provided&gt;' }}</div>
    </div>
    <button 
      class="actions button--green"
      @click="$emit('remove', item._id)"
    >
      remove
    </button>
  </div>
</template>

<script>
export default {
  name: 'TaskListItem',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2px;
  padding: 5px;
  border: 1px #3b8070 solid;
  border-radius: 5px;
  
  &-body {
    width: 75%;

    &-heading {
      font-size: 1.5em;
    }

    &-info {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }

  .actions {
    background-color: #fff;

    &:hover {
      background-color: #3b8070;
    }
  }
}
</style>
