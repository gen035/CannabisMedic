<template>
  <div class="message" :class="{'is-closed' : closed }" v-if="message && message.show_message">
    <i class="fas fa-times-circle" v-if="message.closable" v-on:click="close"></i>
    <div v-html="$prismic.asHtml(message.message)" />
  </div>
</template>
<script>
  import Button from '~/components/Button';
  import Lang from '~/components/Lang';
  import Media from '~/components/Media';
  import Navigation from '~/components/Navigation';
  import Message from '~/components/Message';

  export default {
    props: {
      message: {
        type: Object,
        require: false,
        default: () => {}
      }
    },
    data() {
      return {
        closed: false
      }
    },
    methods: {
      close() {
        this.closed = true;
      }
    }
  }
</script>