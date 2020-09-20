<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>
<script>
import Header from './header';

export default {
  middleware: ['settings', 'navigation', 'i18n'],
  components: {
    Header
  }
}
</script>