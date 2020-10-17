<template>
  <div class="error">
    <h1 v-if="error.statusCode === 404">{{ $t('error.notFound.title') }}</h1>
    <h1 v-else>{{ $t('error.generic') }}</h1>
    <nuxt-link to="/">Home page</nuxt-link>
    <img src="https://images.prismic.io/cannabismedic/6802a4bd-9f35-41d1-8d3b-9938bcb230bf_clinique.png?auto=compress,format" />
  </div>
</template>

<script>
  export default {
    props: ['error']
  }
</script>