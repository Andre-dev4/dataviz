export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
    env: {
    SERVICE_HOST: process.env.SERVICE_HOST || '192.168.1.17:3333',
    API_URL: ''// process.env.SERVICE_HOST ? 'https://' + process.env.SERVICE_HOST : 'http://localhost:3000'
  },
  // mode: 'spa',
  head: {
    title: 'Agence ORE | Mobilités propres',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  '@/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-touch', ssr: false },
    '~/plugins/mixinCommonMethods.js',
    '~/plugins/directives.js',
    // '~/plugins/svg-inline.js',
    {
      src: '~/plugins/vue-highchartsfull.js',
      ssr: false,
    },
    {
      src: '~/plugins/vue-observe-visibility.js',
      ssr: false
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-basic-auth-module', // https://go.nuxtjs.dev/axios
  '@nuxtjs/axios', '@nuxtjs/svg', // https://go.nuxtjs.dev/pwa
  '@nuxtjs/pwa'],
    basic: {
    name: 'aore',
    pass: 'vpaore!_wdd',
    enabled: process.env.BASIC_ENABLED === 'true' // require boolean value(nullable)
    },
    
      // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  
    // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

 // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    /*
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
          config.module.rules.push({
              enforce: "pre",
              test: /\.(js|vue)$/,
              loader: "eslint-loader",
              exclude: /(node_modules|static)/,
              options: {
                  formatter: require('eslint-friendly-formatter'),
                  emitWarning: true,
                  fix: true
              }
          })
              
      }

    }
    */
    
    extend(config, ctx) {
      config.node = {
            fs: 'empty'
        }
      /*
      config.plugins = config.plugins.filter((plugin) => plugin.constructor.name !== 'UglifyJsPlugin')
      
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
          config.module.rules.push({
              enforce: "pre",
              test: /\.(js|vue)$/,
              loader: "eslint-loader",
              exclude: /(node_modules|static)/,
              options: {
                  formatter: require('eslint-friendly-formatter'),
                  emitWarning: true,
                  fix: true
              }
          })
              
      }

      const vueLoader = config.module.rules.find(function (module) {
        console.log(module.test.toString(), '/\\.vue$/i')
        return module.test.toString() === '/\\.vue$/i'
      })
      // Remove SVG from default rules
      config.module.rules.forEach((rule) => {
        if (rule.test.toString() === '/\\.(png|jpe?g|gif|svg|webp)$/i') {
          rule.test = /\.(png|jpe?g|gif|webp)$/i
        } else if (rule.test.toString() === '/\\.(png|jpe?g|gif|svg|webp|avif)$/i') {
          rule.test = /\.(png|jpe?g|gif|webp|avif)$/i
        }
      })
      
      // Add svg inline loader configuration
      config.module.rules.push({
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      })
      
      // Important to apply transforms on svg-inline:src
      vueLoader.options.transformAssetUrls['svg-inline'] = 'src'*/
    } 
  },
}