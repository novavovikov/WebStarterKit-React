const 	webpack = require('webpack'),
        path = require('path'),
		merge = require('webpack-merge'),

        WebpackCleanupPlugin  = require('webpack-cleanup-plugin'),
		HtmlWebpackPlugin = require('html-webpack-plugin'),

        img = require('./config/img'),
        fonts = require('./config/fonts'),
        css = require('./config/css'),
		js = require('./config/js'),
		pug = require('./config/pug'),

        devServer = require('./config/devserver'),
        jsUglify = require('./config/js.uglify.js');

const PATHS = {
    src: path.resolve(__dirname, 'client'),
    build: path.resolve(__dirname, 'public')
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