<template>
  <div>
    <!-- <Hero :hero-data="hero.data" /> -->
    <div class="contact-map">
      <GmapMap
        :center="{
          lat: centerLat,
          lng: centerLong
        }"
        :zoom="7"
        id="map"
        map-type-id="roadmap"
      >
        <gmap-custom-marker
          :key="index"
          v-for="(location, index) in content.body[0].items.filter(location => !location.hide)"
          :marker="{
            lat: location.geo.latitude,
            lng: location.geo.longitude
          }"
          @click.native="toggleInfoWindow(location.geo.latitude, location.geo.longitude, index, location.location_name)"
        >
          <img
            :src="location.marker && location.marker.url ? location.marker.url : '//prismic-io.s3.amazonaws.com/cannabismedic/ddfc2045-4d39-4fc7-8ab2-4c43ee171fa5_marker.svg'"
            height="30"
          />
        </gmap-custom-marker>
        <GmapInfoWindow
          :options="infoOptions"
          :position="infoWindowPos"
          :opened="infoWinOpen"
          @close="infoWinOpen = false"
        >
          {{ this.infoContent }}
        </GmapInfoWindow>
      </GmapMap>
    </div>
    <div class="contact-locations container">
      <h1 class="contact-title" v-if="content.title">{{content.title}}</h1>
      <div class="row justify-content-center">
        <template v-for="(item, index) in content.body[0].items.filter(location => !location.hide)">
          <div class="contact-location col-lg-3 col-md-4 col-sm-6" :key="index" >
            <Location :location="item" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import Hero from '~/components/Hero';
  import Location from '~/components/Location';
  import GmapCustomMarker from 'vue2-gmap-custom-marker';

  export default {
    async asyncData({ app, error, store}) {
      const locale = store.state.i18n.locale;
      const default_image = store.state.settings.default_og_image;
      const domain = store.state.settings.domain;
      let content = []
      
      await app.$prismic.api.query(
        app.$prismic.predicates.at('document.type', 'contact'), {
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
    data() {
      return {
        centerLat: 45.501690,
        centerLong: -73.567253,
        infoWindowOpen: false,
        infoOptions: {
          pixelOffset: {
            width: 0,
            height: -35
          }
        },
        infoWindowPos: null,
        currentMidx: null,
        infoWinOpen: false,
        infoContent: ''
      }
    },
    methods: {
      toggleInfoWindow(lat, long, index, name) {
        this.infoWindowPos = {lat: lat, lng: long};
        this.infoContent = name;

        if (this.currentMidx == index) {
          this.infoWinOpen = !this.infoWinOpen;
        }
        else {
          this.infoWinOpen = true;
          this.currentMidx = index;
        }
      }
    },
    components: {
      Hero,
      GmapCustomMarker,
      Location
    },
    nuxtI18n: {
      paths: {
        fr: '/succursales',
        en: '/branches'
      }
    },
  }
</script>
