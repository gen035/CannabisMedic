<template>
  <div>
    <Hero :hero-data="hero.data" />
    <div class="contests container">
      <div v-if="content.body[0].items.length <= 0" class="row contests-empty">
        <h2>{{ $t('contests.empty')}}</h2>
      </div>
      <div class="row">
        <template v-for="(item, index) in content.body[0].items">
          <div class="contests-item col-lg-3 col-md-4 col-sm-6" :key="index" >
            <Contest :contest="item" :image="default_image_contest" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
  import Hero from '~/components/Hero';
  import Contest from '~/components/Contest';
  export default {
    async asyncData({ app, error, store}) {
      const locale = store.state.i18n.locale;
      const default_image = store.state.settings.default_og_image;
      const default_image_contest = store.state.settings.default_contest_image;
      const domain = store.state.settings.domain;
      let content = []
      
      await app.$prismic.api.query(
        app.$prismic.predicates.at('document.type', 'contest'), {
            lang: `${locale}-ca`
          }
        ).then((response) => {
          response.results.forEach(result => {
            content = result.data;
          });
        })

      let hero = {};
      hero = await app.$prismic.api.getByID(content.hero.id);

      if (content) {
        return {
          content,
          hero,
          domain,
          default_image,
          default_image_contest
        }
      } else {
        error({ statusCode: 404, message: 'Page not found' })
      }
    },
    head() {
      return {
        title: this.content.seo_title,
        link: [
          { rel: 'canonical', href: this.domain + this.$route.path}
        ],
        meta: [
          { hid: 'description', name: 'description', content: this.content.seo_description },
          { hid: 'og:type', property: 'og:type', content: 'website'},
          { hid: 'og:url', property: 'og:url', content: this.domain + this.$route.path},
          { hid: 'og:title', property: 'og:title', content: this.content.seo_title},
          { hid: 'og:description', property: 'og:description', content: this.content.seo_description},
          { hid: 'og:image', property: 'og:image', content: this.content.seo_image.url ? this.content.seo_image.url : this.default_image.url},
          { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image'},
          { hid: 'twitter:url', property: 'twitter:url', content: this.domain + this.$route.path},
          { hid: 'twitter:title', property: 'twitter:title', content: this.content.seo_title},
          { hid: 'twitter:description', property: 'twitter:description', content: this.content.seo_description},
          { hid: 'twitter:image', property: 'twitter:image', content: this.content.seo_image.url ? this.content.seo_image.url : this.default_image.url}
        ]
      }
    },
    components: {
      Hero,
      Contest
    },
    nuxtI18n: {
      paths: {
        fr: '/concours',
        en: '/contests'
      }
    },
  }
</script>
