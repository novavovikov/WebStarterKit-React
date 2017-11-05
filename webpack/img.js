module.exports = function() {
	return {
		module: {
			rules: [
				{
					test: /\.(gif|png|jpe?g|svg|ico)$/i,
					loader: [
						{
							loader: 'file-loader',
							options: {
								outputPath: 'img/',
								name: '[name].[ext]'
							}
						},
						{
							loader: 'image-webpack-loader',
							options: {
								gifsicle: {
									interlaced: false,
								},
								optipng: {
									optimizationLevel: 7,
								},
								pngquant: {
									quality: '65-90',
									speed: 4
								},
								mozjpeg: {
									progressive: true,
									quality: 65
								},
								svgo: {
									removeViewBox: false
								},
								webp: {
									quality: 75
								}
							}
						}
					]
				}
			]
		}
	}
};