<template>
  <Nuxt-link v-if="$store.state.i18n.locale === 'en'" :to="switchLocalePath('fr')">Français</Nuxt-link>
  <Nuxt-link v-else :to="switchLocalePath('en')">English</Nuxt-link>
</template>
<script>
  export default {
  }
</script>
