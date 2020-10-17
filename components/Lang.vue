<template>
  <Nuxt-link class="lang" v-if="$store.state.i18n.locale === 'en'" :to="switchLocalePath('fr')">
    <i v-if="showGloble" class="fas fa-globe-americas"></i>Français
  </Nuxt-link>
  <Nuxt-link class="lang" v-else :to="switchLocalePath('en')">
    <i v-if="showGloble" class="fas fa-globe-americas"></i>English
  </Nuxt-link>
</template>
<script>
  export default {
    props: {
      showGloble: {
        type: Boolean,
        require: false,
        default: false
      }
    }
  }
</script>
