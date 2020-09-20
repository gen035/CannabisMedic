<template>
  <header class="header">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-3">
          <a href="/" title="Cannabis Medic home" data-track="" data-track-category="nav" data-track-action="click" data-track-label="Logo">
            <Media
              classes="header-logo"
              :image="this.$store.state.settings.logo"
            />
          </a>
        </div>
        <div class="col-md-7">ddd</div>
        <div class="col-md-2">
          <Button type="link" :url="this.$store.state.navigation.button_link.url" :text="this.$store.state.navigation.button_text" />
        </div>
      </div>
    </div>
  </header>
</template>
<script>
  import Button from '~/components/Button';
  import Media from '~/components/Media';
  export default {
    computed: {
      locale() {
        return this.$store.state.i18n.locale;
      }
    },
    data() {
      return {
        nav: [],
      }
    },
    created() {
      console.log(this.$store.state.navigation)
      console.log(this.$store.state)
    },
    watch: {
    },
    methods: {
    },
    components: {
      Button,
      Media
    }
  }
</script>