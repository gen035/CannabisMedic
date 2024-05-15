<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4 footer-newsletter">
          <Media :image="getSettings.logo_footer" class="footer-logo" />
          <Newsletter />
        </div>
        <div class="col-md-4 footer-nav">
          <ul>
            <li v-for="(item, index) in $store.state.navigation.body.filter(item => !item.primary.hide)" :key="index">
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
          <a class="footer-social-link" :href="getSettings.facebook.url" target="_blank">
            <i class="fab fa-facebook"></i>
            Facebook
          </a>
          <Lang :showGloble="true" />
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
  import { mapGetters } from 'vuex';
  import Media from '~/components/Media';
  import Link from '~/components/Link';
  import Newsletter from '~/components/Newsletter';
  import Lang from '~/components/Lang';

  export default {
    components: {
      Lang,
      Link,
      Media,
      Newsletter
    },
    computed: {
    ...mapGetters([
      'getSettings',
    ])
  },
  }
</script>