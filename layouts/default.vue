<template>
  <div class="wrapper">
    <Agegate />
    <MiniCalculator />
    <Header />
    <Nuxt class="content-wrapper"/>
    <Footer />
  </div>
</template>
<script>
import Header from './header';
import Footer from './footer';
import MiniCalculator from '~/components/MiniCalculator';
import Agegate from '~/components/Agegate';

export default {
  middleware: [
    'settings',
    'navigation',
    'message',
    'agegate'
  ],
  components: {
    Header,
    Footer,
    MiniCalculator,
    Agegate
  }
}
</script>