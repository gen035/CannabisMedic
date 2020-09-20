<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <Media :image="$store.state.settings.logo_footer" class="footer__logo" />
        </div>
        <div class="col-md-4">
          <ul class="footer__nav" v-for="(item, index) in $store.state.navigation.body" :key="index">
            <li class="footer__nav__item">
              <Link
                :link="item.primary.item_link"
                :text="item.primary.text"
                :external="item.primary.item_link_external"
              />
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <div class="footer__title">{{ $t('footer.follow') }}</div>
          <a class="footer__social__link" :href="$store.state.settings.facebook.url" target="_blank">
            <i class="fa fa-facebook-official"></i>
            Facebook
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
  import Media from '~/components/Media';
  import Link from '~/components/Link';
  export default {
    computed: {
    },
    components: {
      Link,
      Media
    }
  }
</script>