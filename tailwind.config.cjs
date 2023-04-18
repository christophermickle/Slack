/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  fontFamily: {
			'oswald': ['Oswald', 'sans-serif'],
		  },
		  colors: {
			// make purple have this hex 74247A
			'purple': '#74247A',
		  }
		},
	  },
	plugins: [],
}
