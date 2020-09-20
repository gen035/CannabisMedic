<template>
  <header class="header">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-3">
          <a href="/" title="Cannabis Medic home" data-track="" data-track-category="nav" data-track-action="click" data-track-label="Logo">
            <Media
              classes="header__logo"
              :image="this.$store.state.settings.logo"
            />
          </a>
        </div>
        <div class="col-md-7">
          <Navigation :navigation="getNav" />
        </div>
        <div class="col-md-2">
          <Button
            type="link"
            :url="this.$store.state.navigation.button_link.url"
            :text="this.$store.state.navigation.button_text"
          />
        </div>
      </div>
    </div>
  </header>
</template>
<script>
  import Button from '~/components/Button';
  import Media from '~/components/Media';
  import Navigation from '~/components/Navigation';

  export default {
    computed: {
      getNav() {
        return this.$store.state.navigation.body
      }
    },
    components: {
      Button,
      Media,
      Navigation
    }
  }
</script>