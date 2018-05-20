<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred <b>{{ error.statusCode }}</b></h1>
    <p>
      <small>{{ error.message }}</small>
    </p>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>