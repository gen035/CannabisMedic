<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from './header';
import Footer from './footer';
export default {
  middleware: ['settings', 'navigation'],
  components: {
    Header,
    Footer
  }
}
</script>