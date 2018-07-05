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
		extensions: ['.js', '.jsx', '.json']
	}
};
