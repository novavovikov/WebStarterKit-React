const webpack = require('webpack'),
		glob = require('glob'),
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
    	source: path.resolve(__dirname, 'src'),
    	build: path.resolve(__dirname, 'dist'),

		sourcePages: path.resolve(__dirname, 'src/pages'),
};

console.log(PATHS.sourcePages);


//plugins
const plugins = [
	new WebpackCleanupPlugin(),
	new webpack.optimize.CommonsChunkPlugin({
		name: 'common'
	})
];

const entryHtmlPlugins = function(entryName) {
		plugins.push(
			new HtmlWebpackPlugin({
				filename: `${entryName}.html`,
				chunks: [ entryName, 'common'],
				template: `${PATHS.source}/pages/${entryName}/${entryName}.pug`
			})
		)
};

//config
const common = merge([
	{
		entry: glob.sync(PATHS.source + '/pages/**/*.js').reduce(function(obj, el){
			let entryName = path.parse(el).name;
			entryHtmlPlugins(entryName);
			obj[entryName] = el;
			return obj
		},{}),
		output: {
			path: PATHS.build,
			filename: 'js/[name].js'
		},
		plugins: plugins
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