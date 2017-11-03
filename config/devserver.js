const env = require('./env');

module.exports = function() {
    return {
        devServer: {
            stats: 'errors-only',
            historyApiFallback: true,
            port: env.webpackPort,
            proxy: {
              '/api/*': {
                  host: `http://${env.webpackHost}:${env.webpackPort}/`,
                  target: `http://${env.apiHost}:${env.apiPort}/`
              }
            }
        }
    }
};