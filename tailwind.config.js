const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true
	},
	purge: [
		'./pages/**/*.js',
		'./pages/**/*.jsx',
		'./components/**/*.js',
		'./components/**/*.jsx',
		'./components/**/*.mdx',
		'./pages/**/*.mdx'
	],
	theme: {
		extend: {
			colors: {
				accent: 'rgba(255, 255, 255, 0.1)',
				link: '#FF1155'
			},
			maxWidth: {
				min: 'min-content',
				max: 'max-content'
			}
		},
		fontFamily: {
			display:
				'Tajawal, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol'
		}
	},
	variants: {},
	plugins: []
}
