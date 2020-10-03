<template>
  <div>
    <Hero :hero-data="hero.data" />
    <section class="dosage container">
      <div class="row align-items-center">
        <div class="col-md-12">
          <div v-html="$prismic.asHtml(content.text)" />
        </div>
      </div>
      <div>
        <div class="col-md-12 dosage-table">
          <div class="row d-md-flex d-none">
            <div class="col-md-3 dosage-table--header">{{ $t('dosage.mode') }}</div>
            <div class="col-md-3 dosage-table--header">{{ $t('dosage.start') }}</div>
            <div class="col-md-3 dosage-table--header">{{ $t('dosage.max') }}</div>
            <div class="col-md-3 dosage-table--header">{{ $t('dosage.duration') }}</div>
          </div>
          <template v-for="(item, index) in content.body[0].items">
            <Dosage :dosage="item" :key="index" />
          </template>
        </div>
      </div>
      <div class="dosage-disclaimer" v-html="$prismic.asHtml(content.disclaimer)" />
    </section>
  </div>
</template>

<script>
  import Hero from '~/components/Hero';
  import Dosage from '~/components/Dosage';

  export default {
    async asyncData({ app, error, store}) {
      const locale = store.state.locale;
      const default_image = store.state.settings.default_og_image;
      const domain = store.state.settings.domain;
      let content = []
      
      await app.$prismic.api.query(
        app.$prismic.predicates.at('document.type', 'aboutdosage'), {
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
          default_image
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
      Dosage
    },
    nuxtI18n: {
      paths: {
        fr: '/a-propos-du-cannabis/dosage',
        en: '/about-cannabis/dosage'
      }
    },
  }
</script>
