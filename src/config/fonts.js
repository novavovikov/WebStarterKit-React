module.exports = function() {
	return {
		module: {
			rules: [
				{
					test: /\.(woff2?|ttf|otf|eot)$/,
					exclude: /node_modules/,
					loader: [
						{
							loader: 'file-loader',
							options: {
								outputPath: 'css/fonts/',
								name: '[name].[ext]'
							}
						}
					]
				}
			]
		}
	}
};