const config = require('./env');

module.exports = function() {
    return {
        devServer: {
            stats: 'errors-only',
            historyApiFallback: true,
            port: config.webpackPort,
            proxy: {
              '/api/*': {
                  host: `http://${config.webpackHost}:${config.webpackPort}/`,
                  target: `http://${config.apiHost}:${config.apiPort}/`
              }
            }
        }
    }
};