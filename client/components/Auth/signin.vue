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
    <input 
      v-model="user.age"
      type="number" 
      placeholder="Age"
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
  name: 'Signin',
  mixins: [ submit ]
}
</script>

<style lang="scss" src="./auth.scss"></style>
