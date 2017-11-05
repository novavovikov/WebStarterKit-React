const	webpack = require('webpack'),
		merge = require('webpack-merge'),
		PATH = require('./server.config').PATH,

		WebpackCleanupPlugin  = require('webpack-cleanup-plugin'),
		HtmlWebpackPlugin = require('html-webpack-plugin'),

		img = require('./webpack/img'),
		fonts = require('./webpack/fonts'),
		css = require('./webpack/css'),
		js = require('./webpack/js'),
		pug = require('./webpack/pug'),

		devServer = require('./webpack/devserver'),
		jsUglify = require('./webpack/js.uglify.js');

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