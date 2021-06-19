module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		sourceType: 'module'
	},
	plugins: [
		'@typescript-eslint/eslint-plugin',
		'import',
		'eslint-comments',
		//'functional'
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:eslint-comments/recommended',
		'plugin:import/typescript',
		// 'plugin:functional/lite',
		'prettier',
		'prettier/@typescript-eslint'
	],
	root: true,
	env: {
		node: true
	},
	rules: {
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',

		"functional/immutable-data": "off",
		"functional/no-class": "off",
		"functional/prefer-readonly-type": "off",
		"functional/no-this-expression": "off",
		"functional/no-let": "off",
		"functional/no-loop-statement": "off",
		"@typescript-eslint/no-empty-function": "off",
		"@typescript-eslint/no-unused-vars": "off",

		'eslint-comments/disable-enable-pair': [
			'error',
			{ 'allowWholeFile': true }
		],
		'eslint-comments/no-unused-disable': 'error',
		'import/order': [
			'error',
			// { "newlines-between": "always", "alphabetize": { "order": "asc" } }
			{ 'alphabetize': { 'order': 'asc' } }
		],
		'sort-imports': [
			'error',
			{ 'ignoreDeclarationSort': true, 'ignoreCase': true }
		]
	},
	ignorePatterns: [
		'.eslintrc.js',
		'**/*.js',
		'node_modules', 'build', 'coverage'
	],
	globals: { 'BigInt': true, 'console': true, 'WebAssembly': true }
};
