// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Benjamin Bertout - Front-end developer',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Portfolio of Benjamin Bertout, front-end developer' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#E2BCB4' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    '~/assets/scss/main.scss'
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/core/_mixins.scss";'
            + '@import "@/assets/scss/core/_variables.scss";'
            +'@import "@/assets/scss/core/_media-queries.scss";'
            + '@import "@/assets/scss/core/_functions.scss";',
        },
      },
    },
  },

  modules: [
    ['@nuxtjs/google-fonts', {
        families: {
          Lexend: [300, 400, 500],
          Lato: [300, 400],
        }
    }],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
})
