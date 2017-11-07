const webpack = require('webpack');
const merge = require('webpack-merge');
const PATH = require('./server/config').PATH;

const WebpackCleanupPlugin  = require('webpack-cleanup-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const img = require('./webpack/img');
const fonts = require('./webpack/fonts');
const css = require('./webpack/css');
const js = require('./webpack/js');
const pug = require('./webpack/pug');
const devServer = require('./webpack/devserver');
const jsUglify = require('./webpack/js.uglify.js');

//plugins
const getPlugins = function () {
		let plugins = [
			new WebpackCleanupPlugin(),
			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: JSON.stringify('production')
				}
			}),
			new HtmlWebpackPlugin({
				filename: `index.html`,
				template: `${PATH.client}/index.pug`
			})
		];

		return plugins;
	};


const common = merge([
	{
		entry: {
			index: `${PATH.client}/js/index.js`
		},
		output: {
			path: PATH.public,
			filename: 'js/[name].js'
		},
		plugins: getPlugins()
	},
	img(),
	fonts(),
	css(),
	js(),
	pug()
]);

//
module.exports = function (env) {
    if (env === 'production') {
        return merge([
            common,
            jsUglify()
        ])
    }
    if (env === 'development') {
        return merge([
            common,
            devServer()
        ])
    }
};