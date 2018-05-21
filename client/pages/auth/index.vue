<template>
  <div class="auth-form">
    <Auth 
      :type="type"
      @submit="onSubmit"
    />
    <div class="switcher">
      <div>
        <input type="radio" id="login" value="login" v-model="type">
        <label for="login">login</label>
      </div>
      
      <div>
        <input type="radio" id="signin" value="signin" v-model="type">
        <label for="signin">signin</label>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Auth from '~/components/Auth'

  export default {
    components: {
      Auth
    },
    data: () => ({
      type: 'login'
    }),
    computed: {
      ...mapGetters('auth', [
        'isAuthenticated',
      ]),
    },
    methods: {
      ...mapActions('auth', [
        'login',
        'signin',
      ]),
      onSubmit(credentials) {
        this[this.type](credentials)
      }
    },
    mounted() {
      if (this.isAuthenticated) {
        this.$router.replace({ path: '/' })
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
    flex-direction: column;

    .switcher {
      display: flex;
      flex-direction: row;
      > * {
        margin: 10px;
      }
    }
  }
</style>
