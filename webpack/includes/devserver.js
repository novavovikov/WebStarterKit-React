const { env } = require('../../config');

module.exports = function() {
    return {
        devServer: {
            stats: 'errors-only',
            historyApiFallback: true,
            port: env.webpack.port,
            proxy: {
                '/api/*': {
                    host: `http://${env.webpack.host}:${env.webpack.port}/`,
                    target: `http://${env.api.host}:${env.api.port}/`
                }
            }
        }
    }
};