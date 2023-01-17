import Meta from './src/plugins/meta'
import viteCompression from 'vite-plugin-compression';

export default defineNuxtConfig({
	loading: '~/components/loading.vue',
	css: ["~/assets/styles/base.scss"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	vite: {
		plugins: [viteCompression({ algorithm: 'brotliCompress' })]
	},
	plugins: [
		{ src: '~/plugins/aos', mode: 'client' },
	],
	buildModules: [
		['@nuxt-modules/compression', {
			algorithm: 'brotliCompress'
		}]
	],
	cache: true,
	app: {
		head: {
			title: 'Blanball',
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
			],
			meta: Meta,
		},
	},
	ssr: false,
	srcDir: 'src/',
	preset: 'node-server',
	router: {
		scrollBehavior(to) {
			if (to.hash) {
				return window.scrollTo({
					top: document.querySelector(to.hash).offsetTop + window.innerHeight,
					behavior: 'smooth'
				})
			}
			return window.scrollTo({ top: 0, behavior: 'smooth' })
		},
	},
	modules: [
		'@nuxtjs/robots',
		'@funken-studio/sitemap-nuxt-3',
		'@nuxt/image-edge',
	],

	image: {
		presets: {
			blanball: {
				modifiers: {
					quality: '10',
					prerender: true,
					loading: 'lazy',
				}
			}
		}
	},

	build: {
		html: {
			minify: {
				collapseBooleanAttributes: true,
				decodeEntities: true,
				minifyCSS: true,
				minifyJS: true,
				processConditionalComments: true,
				removeEmptyAttributes: true,
				removeRedundantAttributes: true,
				trimCustomFragments: true,
				useShortDoctype: true,
				removeComments: true,
				preserveLineBreaks: false,
				collapseWhitespace: true
			}
		},
	},

	sitemap: {
		cacheTime: 1,
		defaults: {
			changefreq: 'daily',
			priority: 1,
			lastmod: new Date().toISOString(),
		},
	},
});