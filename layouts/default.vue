<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>
<script>
import Header from './header';

export default {
  middleware: ['settings', 'navigation'],
  components: {
    Header
  }
}
</script>