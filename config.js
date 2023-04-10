const defaultLanguage = 'en'
const supportedLanguages = ['en', 'tr']

module.exports = {
  siteMetadata: {
    title: 'Gralig CSS',
    author: '@erenesto',
    description: 'A simple, grayish CSS Library',
    siteUrl: 'https://gralig.netlify.app/',
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
    host: 'https://gralig.netlify.app/',
    sitemap: 'https://gralig.netlify.app/sitemap.xml',
    policy: [{ userAgent: '*', allow: '/' }],
  },
  google: {
    gaIdentifier: `UA-43800653-10`,
    gtmIdentifier: `GTM-T9ZL5ZJ`,
  },
}
