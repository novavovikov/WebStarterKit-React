module.exports = function() {
    return {
        devServer: {
            historyApiFallback: true,
            stats: 'errors-only',
            port: 9000,
            proxy: {
              '/api/*': {
					  host: 'http://localhost:9000/',
                 target: 'http://localhost:3012'
              }
            }
        }
    }
};