import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'
import DefaultLayout from '~/layouts/Default.vue'
import GenreLayout from '~/layouts/GenreLayout.vue'

export default function(Vue, { appOptions, head }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  })

  Vue.use(Vuetify)

  appOptions.vuetify = new Vuetify({
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.amber,
          secondary: colors.blue,
          accent: colors.red,
          error: colors.deepOrange,
          warning: colors.yellow,
          success: colors.lightGreen,
        },
      },
    },
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('genre-layout', GenreLayout)
}
