export default {
	css: ["~/assets/styles/base.scss"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
	head: {
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial scale=1' },
			{ hid: 'description', name: 'description', content: 'Meta description' }
		]
	},
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
};


defineNuxtConfig({
	ssr: false,
	preset: 'node-server'
})