const webpack = require('webpack'),
		merge = require('webpack-merge'),
		config = require('./src/config/env'),

		WebpackCleanupPlugin  = require('webpack-cleanup-plugin'),
		HtmlWebpackPlugin = require('html-webpack-plugin'),

		img = require('./src/config/img'),
		fonts = require('./src/config/fonts'),
		css = require('./src/config/css'),
		js = require('./src/config/js'),
		pug = require('./src/config/pug'),

		devServer = require('./src/config/devserver'),
		jsUglify = require('./src/config/js.uglify.js');

//plugins
const getPlugins = function () {
		let plugins = [
			new WebpackCleanupPlugin(),
			new HtmlWebpackPlugin({
				filename: `index.html`,
				template: `${config.clientDir}/index.pug`
			}),
			new webpack.optimize.CommonsChunkPlugin({
				name: 'common'
			})
		];

		return plugins;
	};


const common = merge([
	{
		entry: {
			index: `${config.clientDir}/js/index.jsx`
		},
		output: {
			path: config.publicDir,
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
            // jsUglify()
        ])
    }
    if (env === 'development') {
        return merge([
            common,
            devServer()
        ])
    }
};