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
		}, '@aceforth/nuxt-optimized-images',]
	],
	target: 'static',
	optimizedImages: {
		optimizeImages: true
	},
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
	transpile: ["vee-validate/dist/rules"],
	modules: [
		'@nuxtjs/robots',
		'@funken-studio/sitemap-nuxt-3',
	],
	pushAssets: (req, res, publicPath, preloadFiles) =>
		preloadFiles
			.filter(f => f.asType === 'script' && f.file === 'runtime.js'),

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