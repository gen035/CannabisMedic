<template>
  <div class="message" :class="{'is-closed' : closed }" v-if="getMessage && getMessage.show_message">
    <i class="fas fa-times-circle" v-if="getMessage.closable" v-on:click="close"></i>
    <div v-html="$prismic.asHtml(getMessage.message)" />
  </div>
</template>
<script>
  import {mapGetters} from "vuex";
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
    },
    computed: {
      ...mapGetters([
        'getMessage',
      ])
    }
  }
</script>