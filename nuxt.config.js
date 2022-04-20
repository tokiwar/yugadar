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
      {hid: 'og:image', name: 'og:image', content: 'https://yugadar.ru/upload/uf/363/3p1yu54eiz7ezs9buuvtsdxndxwd69ki.webp'},
      {hid: 'og:url', name: 'og:url', content: 'https://yugadar.ru/'},
      {name: 'format-detection', content: 'telephone=no'},
      {name: 'yandex-verification', content: 'fa73cb5e3abd3dce'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    script: [
      {
        type: 'application/ld+json',
        json: {
          "@context": "https://schema.org",
          "@type": "Organization",
          "url": "https://yugadar.ru/",
          "logo": "https://yugadar.ru/upload/uf/363/3p1yu54eiz7ezs9buuvtsdxndxwd69ki.webp"
        }
      }
    ]
  },
  //loading: '@/components/LoadingBar.vue',
  generate: {
    minify: false
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/fonts.css',
    '@/assets/css/style.css',
    '@/assets/css/hamburgers.css'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '@/plugins/ymapPlugin.js', ssr: false},
    '@/plugins/axios'
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  tailwindcss: {
    config: {
      theme: {
        extend: {
          backgroundSize: {},
          colors: {
            'blue-green-100': '#b5e8d5',
            'light-plum-100': '#c3a9d4',
            'light-yellow-100': '#f9db79',
            'light-pink-100': '#ffbfb3'
          },
          fontFamily: {
            'nunito': ['Nunito'],
            'marck': ['Marck Script']
          },
          width: {
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
            '192': '48rem'
          },
          height: {
            '84': '21rem',
            '88': '22rem',
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
            '192': '48rem'
          },
          maxHeight: {
            '160': '40rem'
          }
        }
      }
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/device',
    '@nuxtjs/proxy',
    'nuxt-mq',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  robots: {
    UserAgent: '*',
    Disallow: '/'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true
    // proxy: false,
    // prefix: '/api',
    // baseURL: 'https://yugadar.ru/api'
  },

  proxy: {
    '/api': {target: 'http://80.78.254.16/', changeOrigin: true},
    '/upload': {target: 'http://80.78.254.16/', changeOrigin: true},
    '/bitrix': {target: 'http://80.78.254.16/', changeOrigin: true}
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ru'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, {isClient}) {
      if (isClient) {
        config.optimization.splitChunks.maxSize = 51200
      }
    }
  }
}
