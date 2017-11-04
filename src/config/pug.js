module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    use: [
							  {
								  loader: 'html-loader'
							  },
							  {
								  loader: 'pug-html-loader',
								  options: {
								  		pretty: true,
									  	exports: false
								  }
							  }
						  ]
                }
            ]
        }
    }
};