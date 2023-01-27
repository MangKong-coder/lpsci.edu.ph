/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				"bebas-neue": ['Bebas Neue', 'cursive'],
				roboto: ['Roboto', 'sans-serif'],
			},
			colors: {
				'lpsci-yellow': '#FACC15',
				'lpsci-red': '#DC2626',
				'lpsci-green': '#166534'
			},
		},
	},
	plugins: [],
}
