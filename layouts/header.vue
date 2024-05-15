<template>
    <header class="header">
      <Message :message="getMessage" />
      <div class="header-navigation container">
        <div class="row align-items-center">
          <div class="col-lg-3 col-md-12 col-8">
            <a :href="getHome" title="Cannabis Medic home">
              <Media
                classes="header-logo"
                :image="getSettings.logo"
              />
            </a>
          </div>
          <div class="col-lg-9 col-md-12 d-md-block d-none">
            <Navigation :navigation="getNavigation.body" />
          </div>
          <div class="col-4 d-md-none header-navigation--menu" v-on:click="open">Menu</div>
        </div>
      </div>
      <MobileNavigation :navigation="getNavigation.body" :opened="menuOpened" @closed="closed" />
    </header>
</template>
<script>
  import { mapGetters } from "vuex";
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
      ...mapGetters([
        'getMessage',
        'getNavigation',
        'getSettings'
      ]),
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