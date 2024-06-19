module.exports = {
	extends: ['stylelint-config-recommended-scss', 'stylelint-config-prettier-scss'],
	plugins: ['stylelint-scss'],
	customSyntax: 'postcss-html',
	overrides: [
		{
			files: ['**/*.(scss|css|html|vue)'],
			customSyntax: 'postcss-scss'
		},
		{
			files: ['**/*.(html|vue)'],
			customSyntax: 'postcss-html'
		}
	],
	rules: {
		'scss/at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['tailwind']
			}
		],
		'color-hex-length': 'long',
		'font-family-name-quotes': null,
		'declaration-empty-line-before': null,
		'no-invalid-position-at-import-rule': null
	}
}
