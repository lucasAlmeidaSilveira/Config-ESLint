module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		"eslint:recommended"
	],
	overrides: [
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: "latest",
		sourceType: "module"
	},
	rules: {
		"block-spacing": 'warn',
		"no-var": "error",
		'no-unused-vars':'warn',
		"indent": [
			"warn",
			"tab"
		],
		"quotes": [
			"warn",
			"double"
		],
		"semi": [
			"warn",
			"never"
		],
		"camelcase": [
			"warn"
		],
		"arrow-parens": "warn",
		"arrow-spacing": "warn",
		"brace-style": "warn",
		"comma-dangle": [
			"error", 
			"never"
		],
		"function-paren-newline": [
			"warn", { "minItems": 4 }
		]
	}
}
