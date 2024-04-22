module.exports = {
	globDirectory: '_site/',
	globPatterns: [
		'**/*.{html,png,css,svg,ttf,woff,ico,js,xml,gem,gemspec,txt,yml,md,json,webmanifest}'
	],
	swDest: '_site/assets/pwa/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};