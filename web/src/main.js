import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue'

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
    },
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
