const webpack = require('webpack'),
		merge = require('webpack-merge'),
		config = require('./config/env'),

		WebpackCleanupPlugin  = require('webpack-cleanup-plugin'),
		HtmlWebpackPlugin = require('html-webpack-plugin'),

		img = require('./config/img'),
		fonts = require('./config/fonts'),
		css = require('./config/css'),
		js = require('./config/js'),
		pug = require('./config/pug'),

		devServer = require('./config/devserver'),
		jsUglify = require('./config/js.uglify.js');

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
			index: `${config.clientDir}/js/index.js`
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