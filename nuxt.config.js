export default {
  ssr: true,
  target: "server",
  head: {
    title: 'ЮгаДар',
    htmlAttrs: {
      lang: "ru"
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Мороженое от кубанского производителя «ЮгаДар»'},
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Мороженое «ЮгаДар»'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://yugadar.ru/logo.png'
      },
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
          "logo": "https://yugadar.ru/logo.png"
        }
      }
    ]
  },
  //loading: '@/components/LoadingBar.vue',
  css: [
    '@/assets/css/fonts.css',
    '@/assets/css/style.css',
    '@/assets/css/hamburgers.css'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '@/plugins/ymapPlugin.js', ssr: false},
    {src: '@/plugins/simple-validator.js', ssr: true},
    {src: '@/plugins/v-mask.js', ssr: true},
    '@/plugins/axios',
    '@/plugins/gtag'
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv'
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
            'light-pink-100': '#ffbfb3',
            'black-rgba': 'rgba(0, 0, 0, 0.7)'
          },
          fontFamily: {
            'nunito': ['Nunito'],
            'marck': ['Marck Script']
          },
          width: {
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
    '@nuxtjs/sitemap',
    '@nuxtjs/recaptcha',
    ['@nuxtjs/yandex-metrika',
      {
        id: process.env.YANDEX,
        webvisor: true
      }
    ]
  ],
  robots: {
    UserAgent: '*',
    Disallow: ['/cgi-bin', '/bitrix/',
      '*bitrix_*=',
      '/local/',
      '/*index.php$',
      '/auth/',
      '*auth=',
      '/personal/',
      '*register=',
      '*forgot_password=',
      '*change_password=',
      '*login=',
      '*logout=',
      '*/search/',
      '*action=',
      '*print=',
      '*?new=Y',
      '*?edit=',
      '*?preview=',
      '*backurl=',
      '*back_url=',
      '*back_url_admin=',
      '*captcha',
      '*/feed',
      '*/rss',
      '*?FILTER*=',
      '*?ei=',
      '*?p=',
      '*?q=',
      '*?tags=',
      '*B_ORDER=',
      '*BRAND=',
      '*CLEAR_CACHE=',
      '*ELEMENT_ID=',
      '*price_from=',
      '*price_to=',
      '*PROPERTY_TYPE=',
      '*PROPERTY_WIDTH=',
      '*PROPERTY_HEIGHT=',
      '*PROPERTY_DIA=',
      '*PROPERTY_OPENING_COUNT=',
      '*PROPERTY_SELL_TYPE=',
      '*PROPERTY_MAIN_TYPE=',
      '*PROPERTY_PRICE[*]=',
      '*S_LAST=',
      '*SECTION_ID=',
      '*SECTION[*]=',
      '*SHOWALL=',
      '*SHOW_ALL=',
      '*SHOWBY=',
      '*SORT=',
      '*SPHRASE_ID=',
      '*TYPE=',
      '*utm*=',
      '*openstat=',
      '*from=',
      '/_nuxt/'
    ],
    Allow: ['*/upload/', '/bitrix/*.js', '/bitrix/*.css', '/local/*.js', '/local/*.css', '/local/*.jpg', '/local/*.jpeg', '/local/*.png', '/local/*.gif'],
    Sitemap: 'https://yugadar.ru/sitemap.xml'
  },

  recaptcha: {
    hideBadge: true,
    siteKey: '6LfSzZAfAAAAAHw6Wn9Cbjy7DKlu3Um7JzUzjFcD',
    version: 3
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
