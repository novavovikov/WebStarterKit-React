const ENV = require('../server/config.js').ENV;

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
                },
                '/auth/*': {
                    host: `http://${ENV.webpackHost}:${ENV.webpackPort}/`,
                    target: `http://${ENV.authHost}:${ENV.authPort}/`
                }
            }
        }
    }
};