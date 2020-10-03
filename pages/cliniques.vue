<template>
  <div>
    <Hero :hero-data="hero.data" />
    <section class="clinics container">
      <div class="row align-items-center">
        <div class="col-md-9 col-12">
          <div v-html="$prismic.asHtml(content.text)" />
        </div>
        <div class="col-md-3 d-md-block d-none">
          <Media :image="content.image" class="clinics__image" />
        </div>
      </div>
      <div class="clinics__items row">
        <template v-for="(item, index) in content.body[0].items">
          <ClinicBlock :block="item" :key="index" />
        </template>
      </div>
    </section>
    <section class="clinics clinics--dark container-fluid">
      <div class="clinic__calculator">
        <h2 class="clinic__calculator__title">{{ $t('clinic.calculator.title') }}</h2>
        <div class="row">
          <div class="col-md-6 offset-md-3 col-12">
            <Calculator />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import ClinicBlock from '~/components/ClinicBlock';
  import Calculator from '~/components/Calculator';
  import Hero from '~/components/Hero';
  import Media from '~/components/Media';

  export default {
    async asyncData({ app, error, store}) {
      const locale = store.state.locale;
      const default_image = store.state.settings.default_og_image;
      const domain = store.state.settings.domain;
      let content = []
      
      await app.$prismic.api.query(
        app.$prismic.predicates.at('document.type', 'clinics'), {
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
      Calculator,
      ClinicBlock,
      Hero,
      Media
    },
    nuxtI18n: {
      paths: {
        fr: '/cliniques',
        en: '/clinics'
      }
    },
  }
</script>
