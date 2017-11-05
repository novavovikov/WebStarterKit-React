const ENV = require('../server.config').ENV;

module.exports = function() {
    return {
        devServer: {
            stats: 'errors-only',
            historyApiFallback: true,
            port: ENV.webpackPort,
            proxy: {
              '/api/*': {
                  host: `http://${ENV.webpackHost}:${ENV.webpackPort}/`,
                  target: `http://${ENV.apiHost}:${ENV.apiPort}/`
              }
            }
        }
    }
};