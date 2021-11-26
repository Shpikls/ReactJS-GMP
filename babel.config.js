// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
const resolvePath = (filePath) => path.resolve(__dirname, filePath)

module.exports = {
	presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-react', '@babel/preset-typescript'],
	plugins: [
		[
			'babel-plugin-module-resolver',
			{
				root: ['.'],
				alias: {
					'@components': resolvePath('src\\components'),
					'@containers': resolvePath('src\\containers'),
					'@styled': resolvePath('src\\styled'),
					'@asserts': resolvePath('src\\asserts'),
					'~': resolvePath('src'),
				},
			},
		],
	],
}
