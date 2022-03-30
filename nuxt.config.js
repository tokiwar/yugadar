export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Югадар',
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
            'main-page-pattern': "url('@/assets/img/main-page-block-2.png')",
            'about-page-pattern': "url('@/assets/img/about-page-block-1.png')",
          },
          backgroundSize: {
            '104': '26rem',
          },
          colors: {
            'blue-green-100': '#b5e8d5',
            'light-plum-100': '#c3a9d4',
            'light-yellow-100': '#f9db79',
            'light-pink-100': '#ffbfb3',
          },
          fontFamily: {
            'gotham': ['Gotham Pro'],
            'nunito': ['Nunito'],
          },
          height: {
            '104': '26rem',
            '112': '28rem',
            '120': '30rem',
            '128': '32rem',
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
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
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
