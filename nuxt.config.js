const GITHUB_TOKEN = ''

export default {
  target: 'static',

  head: {
    title: 'Mads Hougesen | Software Developer',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Software developer from Denmark. Lover of all things JavaScript - but I am always learning new stuff.',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Mads Hougesen | Software Developer',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Software developer from Denmark. Lover of all things JavaScript - but I am always learning new stuff.',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css',
      },
    ],
  },

  graphql: {
    clients: {
      default: {
        endpoint: 'https://api.github.com/graphql',
        options: {
          headers: {
            authorization: `Bearer ${GITHUB_TOKEN}`,
          },
        },
      },
    },
    options: {},
  },

  components: true,

  eslint: {
    fix: true,
  },

  css: [],

  plugins: [],

  sitemap: {
    hostname: 'https://mhouge.dk',
    gzip: true,
  },

  googleAnalytics: {
    id: 'UA-45233401-2',
  },

  buildModules: [
    '@nuxt/typescript-build',
    'nuxt-graphql-request',
    '@nuxtjs/google-analytics',
  ],

  modules: ['@nuxt/content', '@nuxtjs/sitemap'],

  content: {},

  build: {},
}
