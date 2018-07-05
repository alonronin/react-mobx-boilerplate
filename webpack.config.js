const HtmlPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

let context = resolve('src');

module.exports = {
	entry: {
		app: ['babel-polyfill', './']
	},

	context,

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				include: context
			}
		]
	},

	plugins: [new HtmlPlugin()],

	resolve: {
		alias: {
			mobx: resolve(__dirname, 'node_modules/mobx/lib/mobx.es6.js')
		},
		extensions: ['.js', '.jsx', '.json']
	}
};
