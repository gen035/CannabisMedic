<template>
  <div class="site">
    <MiniCalculator />
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from './header';
import Footer from './footer';
import MiniCalculator from '~/components/MiniCalculator';

export default {
  middleware: ['settings', 'navigation'],
  components: {
    Header,
    Footer,
    MiniCalculator
  }
}
</script>