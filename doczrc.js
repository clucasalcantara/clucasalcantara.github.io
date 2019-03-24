/* eslint-disable-next-line */
import { css } from 'docz-plugin-css'

export default {
  title: 'Work With Coffee Playground',
  htmlContext: {
    head: {
      links: [{ rel: 'stylesheet', href: 'src/assets/css/global.css' }]
    }
  },
  plugins: [
    css({
      preprocessor: 'sass',
      cssmodules: false
    })
  ]
}
