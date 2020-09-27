<template>
  <div>
    <div class="mini-calculator__tab" v-on:click="toggle">
      <i class="fas fa-calculator"></i>
    </div>
    <div class="mini-calculator" :class="{'is-opened' : opened}">
      <div class="mini-calculator__close" v-on:click="toggle">
        <i class="fas fa-times-circle"></i>
      </div>
      <Calculator />
    </div>
  </div>
</template>
<script>
  import Calculator from '~/components/Calculator';
  export default {
    data() {
      return {
        opened: false
      }
    },
    methods: {
      toggle() {
        this.opened = !this.opened;
      }
    },
    components: {
      Calculator
    }
  }
</script>
