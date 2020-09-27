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
          hero
        }
      } else {
        error({ statusCode: 404, message: 'Page not found' })
      }
    },
    head() {
      return {
        //title: this.$prismic.asText(this.seo.title),
        link: [
        //{ rel: 'canonical', href: `https://<DOMAIN>${this.$prismic.linkResolver(this.document)}` }
        ],
        meta: [
          //{ hid: 'description', name: 'description', content: this.$prismic.asText(this.seo.description) }
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
