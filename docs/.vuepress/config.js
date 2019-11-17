const { description } = require('../../package')
module.exports = {
    base: '/blog/',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'Smile ^o^',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: '记录日常工作、学习的知识',

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['link', { rel: 'icon', href: '/img/彩虹.png' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        logo: '/img/晴朗.png',
        lastUpdated: 'last Updated', //文档更新时间
        nav: require('./nav'),
        sidebar: require('./sidebar')
    },
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ]
}