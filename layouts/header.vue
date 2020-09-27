<template>
  <header class="header">
    <Message :message="getMessage" />
    <div class="header-navigation container">
      <div class="row align-items-center">
        <div class="col-md-4">
          <a href="/" title="Cannabis Medic home" data-track="" data-track-category="nav" data-track-action="click" data-track-label="Logo">
            <Media
              classes="header__logo"
              :image="this.$store.state.settings.logo"
            />
          </a>
        </div>
        <div class="col-md-6">
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
    <Lang />
  </header>
</template>
<script>
  import Button from '~/components/Button';
  import Lang from '~/components/Lang';
  import Media from '~/components/Media';
  import Navigation from '~/components/Navigation';
  import Message from '~/components/Message';

  export default {
    computed: {
      getNav() {
        return this.$store.state.navigation.body
      },
      getMessage() {
        return this.$store.state.message
      }
    },
    components: {
      Button,
      Lang,
      Media,
      Navigation,
      Message
    }
  }
</script>