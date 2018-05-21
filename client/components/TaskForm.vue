<template>
  <form 
    class="task-form" 
    @submit.prevent="$emit('add', task)"
  >
    <input
      class="task-form-input"
      v-model="task.name"
      type="text" 
      placeholder="Title"
    >
    <textarea 
      class="task-form-input"
      v-model="task.discription"
      type="text" 
      placeholder="Description"
    ></textarea>

    <button 
      type="submit"
      class="submit-btn button--green"  
    >
      Add
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
}

</script>

<style lang="scss" scoped>
.task-form {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &-input {
    width: 80%;
    padding: 15px;
    margin: 20px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #cccccc; 
    outline:0; 
    font-size: 1.2em;
  }

  .submit-btn {
    background-color: #fff;
    margin: 10px;
  }
}
</style>
