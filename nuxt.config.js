
export default {
  mode: 'universal',
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel:'apple-touch-icon-precomposed', sizes:'180x180', href:'/apple-touch-icon.png' },
      { rel:'icon', type:'image/png', href:'/favicon-32x32.png', sizes:'32x32' },
      { rel:'icon', type:'image/png', href:'/favicon-16x16.png', sizes:'16x16' },
      { rel: 'stylesheet', type: 'text/css', href: '//use.fontawesome.com/releases/v5.4.2/css/all.css'},
      { rel: 'stylesheet', type: 'text/css', href: '//fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;700&family=PT+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap'},
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles/application.sass'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/map.js',
    '~/plugins/axios.js',
    '~/plugins/bootstrap.js',
    '~/plugins/mailchimp.js'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'cookie-universal-nuxt',
    ['prismic-nuxt', {
      endpoint: 'https://cannabismedic.cdn.prismic.io/api/v2',
      linkResolver: function(doc, ctx) {
        return '/'
      }
    }],
    ['nuxt-i18n', {
      locales: [
        {
          name: 'English',
          code: 'en',
          iso: 'en-CA',
          file: 'en.js'
        },
        {
          name: 'Francais',
          code: 'fr',
          iso: 'fr-CA',
          file: 'fr.js'
        }
      ],
      langDir: 'locales/',
      defaultLocale: 'fr',
      lazy: true,
      vuex: {
        moduleName: 'i18n', syncLocale: true, syncMessages: false, syncRouteParams: true
      }
    }],
    ['@nuxtjs/google-analytics', {
      id: 'UA-135339299-1'
    }],
    '@nuxtjs/axios',
    '@nuxtjs/moment'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    transpile: [/^vue2-google-maps($|\/)/, 'vue2-gmap-custom-marker'],
  }
}
