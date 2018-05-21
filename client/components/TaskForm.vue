<template>
  <form 
    class="form" 
    @submit.prevent="onSubmit"
  >
    <input
      v-model="task.name"
      type="text" 
      placeholder="Title"
    >
    <textarea 
      v-model="task.discription"
      type="text" 
      placeholder="Description"
    ></textarea>

    <button 
      type="submit"
      class="submit-btn"  
    >
      Submit
    </button>
  </form>
</template>

<script>
export default {
  name: 'TaskForm',
  props: {
    task: {
      type: Object,
      default: () => ({}),
    },
  },
  actions: {
    onSubmit(ev) {
      this.$emit('add', this.task)
    }
  },
}

</script>

<style lang="scss" scoped></style>
