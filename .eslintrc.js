module.exports = {
	env: {
		browser: true,
		es2020: true,
	},
	extends: ['plugin:react/recommended', 'airbnb'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 11,
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'react/jsx-indent': ['error', 0],
		'object-curly-newline': [
			'error',
			{
				ObjectExpression: 'always',
				ObjectPattern: { multiline: true },
				ImportDeclaration: 'never',
				ExportDeclaration: { multiline: true, minProperties: 3 },
			},
		],
	},
};
