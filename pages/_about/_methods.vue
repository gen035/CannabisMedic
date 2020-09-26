<template>
  <div>
    <Hero :hero-data="hero.data" />
    <section class="methods container">
      <div class="row align-items-center">
        <div class="col-md-12">
          <div v-html="$prismic.asHtml(content.text)" />
        </div>
      </div>
      <div class="methods__items">
        <template v-for="(item, index) in content.body[0].items">
          <Block :block="item" :index="index" :key="index" />
        </template>
      </div>
    </section>
  </div>
</template>

<script>
  import Block from '~/components/Block';
  import Hero from '~/components/Hero';
  import Media from '~/components/Media';

  export default {
    async asyncData({ app, error, store}) {
      const locale = store.state.locale;
      let content = []
      
      await app.$prismic.api.query(
        app.$prismic.predicates.at('document.type', 'aboutmethods'), {
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
      Block,
      Hero,
      Media
    },
    nuxtI18n: {
      paths: {
        fr: '/a-propos-du-cannabis/methodes',
        en: '/about-cannabis/methods'
      }
    },
  }
</script>
