const defaultLanguage = 'en'
const supportedLanguages = ['en', 'tr']

module.exports = {
  siteMetadata: {
    title: 'Gralig CSS',
    author: '@erenesto',
    description: 'A simple, grayish CSS Library',
    siteUrl: 'https://gralig.com',
    defaultLanguage,
    supportedLanguages,
  },
  manifest: {
    name: 'gralig',
    short_name: 'gra',
    start_url: '/',
    display: 'minimal-ui',
    icon: 'src/images/icons/icon.png',
  },
  sitemap: {
    host: 'https://gralig.com',
    sitemap: 'https://gralig.com/sitemap.xml',
    policy: [{ userAgent: '*', allow: '/' }],
  },
  ga: {
    identifier: `UA-43800653-10`,
  },
}
