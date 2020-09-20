<template>
  <NuxtLink
    v-if="!external"
    :to="localePath(link)"
    active-class="active"
    exact
  >
    {{ text }}
  </NuxtLink>
  <!-- <a
    v-else-if="external"
    :href="link"
    target="_blank"
  >
    {{text}}
  </a> -->
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
      }
    }
  }
</script>