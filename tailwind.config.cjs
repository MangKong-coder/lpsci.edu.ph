/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'lpsci-yellow': '#F1C400',
				'lpsci-red': '#C64747',
				'lpsci-green': '#318B68'
			},
		},
	},
	plugins: [],
}
