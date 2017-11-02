const 	webpack = require('webpack'),
		path = require('path'),
		merge = require('webpack-merge'),

		HtmlWebpackPlugin = require('html-webpack-plugin'),
		WebpackCleanupPlugin  = require('webpack-cleanup-plugin'),

		devServer = require('./webpack/devserver'),
		jsUglify = require('./webpack/js.uglify'),

		js = require('./webpack/js'),
		pug = require('./webpack/pug'),
		img = require('./webpack/img'),
		fonts = require('./webpack/fonts'),
		css = require('./webpack/css');

const PATHS = {
    	src: path.resolve(__dirname, 'app'),
    	build: path.resolve(__dirname, 'back/public')
};

//plugins
const getPlugins = function () {
		let plugins = [
			new WebpackCleanupPlugin(),
			new HtmlWebpackPlugin({
				filename: `index.html`,
				template: `${PATHS.src}/index.pug`
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
			index: `${PATHS.src}/js/index.js`
		},
		output: {
			path: PATHS.build,
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