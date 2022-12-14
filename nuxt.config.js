import Meta from './src/plugins/meta'

export default defineNuxtConfig({
	css: ["~/assets/styles/base.scss"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
	app: {
		head: {
			title: 'Blanball',
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: './public/favicon.ico' }
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
		}
	},
	modules: [
		'@nuxtjs/robots',
		'@funken-studio/sitemap-nuxt-3',
	],
	sitemap: {
		cacheTime: 1,
		defaults: {
			changefreq: 'daily',
			priority: 1,
			lastmod: new Date().toISOString(),
		},
	},
});
