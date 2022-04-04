export default {
  ssr: true,
  target: "server",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ЮгаДар',
    htmlAttrs: {
      lang: "ru"
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Мороженое от кубанского производителя «ЮгаДар»'},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/fonts.css',
    '@/assets/css/style.css',
    '@/assets/css/hamburgers.css'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '@/plugins/ymapPlugin.js', mode: 'client'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  tailwindcss: {
    config: {
      theme: {
        extend: {
          backgroundImage: {
            'parallax-table': "url('@/assets/img/parallax/parallax-table.png')",
            'parallax-sorbet': "url('@/assets/img/parallax/parallax-sorbet.png')",
            'parallax-icecream': "url('@/assets/img/parallax/parallax-icecream.png')",
            'parallax-icecream-plate': "url('@/assets/img/parallax/parallax-icecream-plate.png')",
          },
          backgroundSize: {},
          colors: {
            'blue-green-100': '#b5e8d5',
            'light-plum-100': '#c3a9d4',
            'light-yellow-100': '#f9db79',
            'light-pink-100': '#ffbfb3',
          },
          fontFamily: {
            'gotham': ['Gotham Pro'],
            'nunito': ['Nunito'],
            'roboto': ['Roboto'],
            'marck': ['Marck Script'],
          },
          height: {
            '104': '26rem',
            '112': '28rem',
            '120': '30rem',
            '128': '32rem',
            '136': '34rem',
            '144': '36rem',
            '152': '38rem',
            '160': '40rem',
            '168': '42rem',
            '176': '44rem',
            '184': '46rem',
            '192': '48rem',
          },
          maxHeight: {
            '160': '40rem',
          }
        }
      }
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/device',
    '@nuxtjs/proxy',
    'nuxt-mq'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true
  },

  proxy: {
    '/api': {target: 'http://yugadar/'},
    '/upload': { target: "http://yugadar/"}
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
