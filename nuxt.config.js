const dev = !process.env.PRODUCTION;
export default {
  ssr: true,
  target: "server",
  head: {
    title: 'ЮгаДар',
    htmlAttrs: {
      lang: "ru"
    },
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Мороженое от кубанского производителя «ЮгаДар»'
      },
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
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://yugadar.ru/'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Yugadar'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        name: 'yandex-verification',
        content: 'fa73cb5e3abd3dce'
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "48x48",
        href: "/favicon-48x48.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/favicon-96x96.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/android-icon-192x192.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/apple-icon-57x57.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/apple-icon-60x60.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/apple-icon-72x72.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/apple-icon-76x76.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/apple-icon-114x114.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/apple-icon-120x120.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/apple-icon-144x144.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/apple-icon-152x152.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-icon-180x180.png"
      }
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
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv'
  ],

  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontSize: {
            '10xl': '10rem',
            '11xl': '12rem',
            '12xl': '15rem',
            '13xl': '18rem',
            '14xl': '21rem',
            '15xl': '25rem'
          },
          backgroundImage: {
            'pattern-lines': "url('@/assets/img/svg/pattern-lines.svg')",
            'pattern-ice-cream': "url('@/assets/img/svg/pattern-ice-cream.svg')"
          },
          colors: {
            'blue-green-100': '#b5e8d5',
            'light-plum-100': '#c3a9d4',
            'light-yellow-100': '#f9db79',
            'light-pink-100': '#ffbfb3',
            'black-rgba': 'rgba(0, 0, 0, 0.7)'
          },
          fontFamily: {
            'nunito': ['Nunito'],
            'nunito-sans': ['NunitoSans'],
            'marck': ['Marck Script'],
            'days': ['Days']
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
    '@nuxtjs/svg-sprite',
    '@nuxtjs/pwa',
    '@nuxtjs/device',
    '@nuxtjs/proxy',
    'nuxt-mq',
    '@nuxtjs/robots',
    ['@nuxtjs/sitemap',
      {
        hostname: 'https://yugadar.ru',
        trailingSlash: true,
        routes: [
          '/news/otkrytie-sayta/',
          '/news/novyy-vkus/',
          '/news/zakaz-morozhenogo/'
        ]
      }],
    '@nuxtjs/recaptcha',
    ['@nuxtjs/yandex-metrika',
      {
        id: process.env.YANDEX,
        webvisor: true
      }
    ],
    '@nuxtjs/component-cache',
    'nuxt-speedkit',
    '@nuxtjs/redirect-module'
  ],
  redirect: [
    {
      from: '^.*(?<!\/)$',
      to: (from, req) => req.url + '/',
      statusCode: 301
    }
  ],
  robots: {
    UserAgent: '*',
    Allow: [
      '/'
    ],
    Sitemap: 'https://yugadar.ru/sitemap.xml'
  },

  recaptcha: {
    hideBadge: true,
    siteKey: '6LfSzZAfAAAAAHw6Wn9Cbjy7DKlu3Um7JzUzjFcD',
    version: 3
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: dev,
    // proxy: false,
    // prefix: '/api',
    baseURL: 'https://yugadar.ru'
  },

  proxy: {
    '/api': {target: 'https://yugadar.ru', changeOrigin: true},
    //'/upload': {target: 'http://80.78.254.16/', changeOrigin: true},
    '/upload': {target: 'https://yugadar.ru', changeOrigin: true}
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
