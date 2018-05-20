<template>
  <form 
    class="form" 
    @submit.prevent="onSubmit"
  >
    <input
      v-model="user.username"
      type="text" 
      placeholder="Username"
    >
    <input 
      v-model="user.password"
      type="password" 
      placeholder="Password"
    >

    <button 
      type="submit"
      class="submit-btn"  
    >
      Submit
    </button>
  </form>
</template>

<script>
import submit from './submit'

export default {
  name: 'Login',
  mixins: [ submit ]
}

</script>

<style lang="scss" src="./auth.scss"></style>
