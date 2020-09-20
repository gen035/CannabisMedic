<template>
  <Hero :hero-data="hero.data" />
</template>

<script>
  import Hero from '~/components/Hero';

  export default {
    async asyncData({ app, error, store}) {
      const locale = store.state.locale;
      let content = []
      
      await app.$prismic.api.query(
        app.$prismic.predicates.at('document.type', 'homepage'), {
            lang: `${locale}-ca`
          }
        ).then((response) => {
          response.results.forEach(result => {
            content = result.data;
          });
        })

      // let blocks = [];
      // for (const block of content.blocks) {
      //   const item = await app.$prismic.api.getByID(block.block.id);
      //   blocks.push(item.data);
      // }

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
    created() {

    },
    components: {
      Hero
    },
    nuxtI18n: {
      paths: {
        fr: '/',
        en: '/'
      }
    },
  }
</script>
