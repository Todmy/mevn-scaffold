<template>
  <div class="auth-form">
    <Auth 
      type="login"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
  import Auth from '~/components/Auth'

  export default {
    components: {
      Auth
    },
    methods: {
      onSubmit() {
      }
    }
  }
</script>

<style lang="scss" scoped>
  .auth-form {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20%;
  }
</style>
