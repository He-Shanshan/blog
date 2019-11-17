/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
import VueHighlightJS from 'vue-highlight.js'
import 'highlight.js/styles/dark.css'
export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    Vue.use(VueHighlightJS)
        // ...apply enhancements for the site.
}