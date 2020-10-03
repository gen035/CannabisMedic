<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4 footer-newsletter">
          <Media :image="$store.state.settings.logo_footer" class="footer-logo" />
          <Newsletter />
        </div>
        <div class="col-md-4 footer-nav">
          <ul>
            <li v-for="(item, index) in $store.state.navigation.body" :key="index">
              <Link
                :link="item.primary.item_link"
                :text="item.primary.text"
                :external="item.primary.item_link_external"
              />
            </li>
          </ul>
        </div>
        <div class="col-md-4 footer-social">
          <div class="footer-title">{{ $t('footer.follow') }}</div>
          <a class="footer-social-link" :href="$store.state.settings.facebook.url" target="_blank">
            <i class="fab fa-facebook"></i>
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
  import Newsletter from '~/components/Newsletter';
  export default {
    components: {
      Link,
      Media,
      Newsletter
    }
  }
</script>