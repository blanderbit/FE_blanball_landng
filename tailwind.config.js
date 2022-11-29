module.exports = {
	content: [
		"./src/components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./src/pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
};