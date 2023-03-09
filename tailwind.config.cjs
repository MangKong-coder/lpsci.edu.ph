/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'lpsci-yellow': '#FACC15',
				'lpsci-red': '#DC2626',
				'lpsci-green': '#166534'
			},
		},
	},
	plugins: [],
}
