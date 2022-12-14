const APP_NAME = 'Blanball'
const COMPANY_NAME = 'FlumX'
const SEARCH_KEY_WORDS = 'Blanball, Blan, Footbal, Sport, Ball,'
const APP_DESCRIPTION = 'desk'
const APP_EMAIL = 'blanball@gmail.com'

export default [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial scale=1' },
    { hid: 'description', name: 'description', content: APP_DESCRIPTION },
    { hid: 'og-type', property: 'og:type', content: 'website' },
    { hid: 'og-title', property: 'og:title', content: APP_NAME },
    { hid: 'og-email', property: 'og:email', content: APP_EMAIL },
    { name: 'keywords', content: SEARCH_KEY_WORDS },
    { hid: 'og-country-name', name: 'og:country-name', content: 'UA' },
    { name: 'copyright', content: COMPANY_NAME },
    { name: 'language', content: 'UA' },
    { name: 'rating', content: 'General' },
    { name: 'target', content: 'all' },
    { name: 'abstract', content: '' },
    { name: 'topic', content: '' },
    { name: 'subject', content: 'Football' },
    { name: 'summary', content: '' },
    { name: 'subtitle', content: APP_DESCRIPTION },
    { name: 'reply-to', content: APP_EMAIL },
    { name: 'date', content: new Date().toISOString() },
    { name: 'DC.title', content: APP_NAME },
    { name: 'search_date', content: new Date().toISOString() },
    { name: 'revisit-after', content: '7 days' },
    { name: 'category', content: 'Fotball' },
    { name: 'owner', content: 'YASYA' },
    { name: 'revised', content: new Date().toISOString() },
    { name: 'Classification', content: 'Business' },
    { name: 'author', content: 'Shapranov Maxim, shapranov.nik@gmail.com' },
    { name: 'identifier-URL', content: 'http://178.151.201.167:49201/application/events' },
    { name: 'distribution', content: 'Global' },
    { name: 'medium', content: 'landing' },
    { name: 'MobileOptimized', content: '479.98' },
    { name: 'application-name', content: APP_NAME },
    { name: 'apple-mobile-web-app-title', content: APP_NAME },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-touch-fullscreen', content: 'yes' },
    { name: 'apple-touch-fullscreen', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    { name: "news_keywords", content: SEARCH_KEY_WORDS }
]