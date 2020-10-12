<template>
    <header class="header">
      <Message :message="getMessage" />
      <div class="header-navigation container">
        <div class="row align-items-center">
          <div class="col-lg-3 col-md-12 col-8">
            <a :href="getHome" title="Cannabis Medic home" data-track="" data-track-category="nav" data-track-action="click" data-track-label="Logo">
              <Media
                classes="header-logo"
                :image="this.$store.state.settings.logo"
              />
            </a>
          </div>
          <div class="col-lg-9 col-md-12 d-md-block d-none">
            <Navigation :navigation="getNav" />
            <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
<nuxt-link :to="switchLocalePath('fr')">Français</nuxt-link>
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
      <MobileNavigation :navigation="getNav" :opened="menuOpened" @closed="closed" />
      <!-- <Lang /> -->
    </header>
</template>
<script>
  import Button from '~/components/Button';
  import Lang from '~/components/Lang';
  import Media from '~/components/Media';
  import Navigation from '~/components/Navigation';
  import MobileNavigation from '~/components/MobileNavigation';
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
      },
      getHome() {
        const locale = this.$store.state.i18n.locale;

        if(locale === 'fr') {
          return '/';
        }

        return '/en';
      }
    },
    methods: {
      open() {
        this.menuOpened = true;
      },
      closed() {
        this.menuOpened = false;
      }
    },
    components: {
      Button,
      Lang,
      Media,
      Navigation,
      MobileNavigation,
      Message
    }
  }
</script>