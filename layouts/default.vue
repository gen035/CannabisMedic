<template>
  <div class="wrapper">
    <Agegate />
    <MiniCalculator />
    <Appointment />
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
import Appointment from '~/components/Appointment';

export default {
  middleware: [
    'settings',
    'navigation',
    'contact'
  ],
  components: {
    Appointment,
    Header,
    Footer,
    MiniCalculator,
    Agegate
  }
}
</script>