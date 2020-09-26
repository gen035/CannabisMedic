<template>
  <div>
    <Hero :hero-data="hero.data" />
    <section class="dosage container">
      <div class="row align-items-center">
        <div class="col-md-12">
          <div v-html="$prismic.asHtml(content.text)" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 dosage-table">
          <div class="row">
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
      <div class="row">
        <div class="col-md-12">
          <div class="dosage-disclaimer" v-html="$prismic.asHtml(content.disclaimer)" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Hero from '~/components/Hero';
  import Dosage from '~/components/Dosage';

  export default {
    async asyncData({ app, error, store}) {
      const locale = store.state.locale;
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
