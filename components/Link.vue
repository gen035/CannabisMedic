<template>
  <NuxtLink
    v-if="!external"
    :to="link"
    active-class="active"
    :exact="isHome"
  >
    {{ text }}
  </NuxtLink>
  <a
    v-else-if="external"
    :href="link"
    target="_blank"
  >
    {{text}}
  </a>
</template>
<script>
  export default {
    props: {
      link: {
        type: String,
        require: true
      },
      text: {
        type: String,
        require: true
      },
      external: {
        type: Boolean,
        require: true
      }
    },
    computed: {
      getTarget() {
        return this.external ? '_blank' : '_self'
      },
      isHome() {
        return this.link === '/' || this.link === '/en';
      }
    }
  }
</script>