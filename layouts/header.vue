<template>
  <header class="header">
    <Message :message="getMessage" />
    <div class="header-navigation container">
      <div class="row align-items-center">
        <div class="col-lg-3 col-md-5 col-8">
          <a href="/" title="Cannabis Medic home" data-track="" data-track-category="nav" data-track-action="click" data-track-label="Logo">
            <Media
              classes="header-logo"
              :image="this.$store.state.settings.logo"
            />
          </a>
        </div>
        <div class="col-lg-8 col-md-7 d-md-block d-none">
          <Navigation :navigation="getNav" />
        </div>
        <!-- <div class="col-md-2 d-md-block d-none">
          <Button
            type="link"
            :url="this.$store.state.navigation.button_link.url"
            :text="this.$store.state.navigation.button_text"
          />
        </div> -->
        <div class="col-4 d-md-none header-navigation--menu" v-on:click="open">Menu</div>
      </div>
    </div>
    <!-- <Lang /> -->
  </header>
</template>
<script>
  import Button from '~/components/Button';
  import Lang from '~/components/Lang';
  import Media from '~/components/Media';
  import Navigation from '~/components/Navigation';
  import Message from '~/components/Message';

  export default {
    data() {
      return {
        menuOpened: false
      }
    },
    computed: {
      getNav() {
        return this.$store.state.navigation.body
      },
      getMessage() {
        return this.$store.state.message
      }
    },
    methods: {
      open() {
        this.menuOpened = true;
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