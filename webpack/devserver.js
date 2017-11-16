const { config } = require('../config');

module.exports = function() {
    return {
        devServer: {
            stats: 'errors-only',
            historyApiFallback: true,
            port: config.webpack.port,
            proxy: {
                '/api/*': {
                    host: `http://${config.webpack.host}:${config.webpack.port}/`,
                    target: `http://${config.api.host}:${config.api.port}/`
                }
            }
        }
    }
};