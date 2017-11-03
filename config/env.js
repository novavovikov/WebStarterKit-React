const path = require('path');

module.exports = {
    apiUrl: '/api',
    apiHost: 'localhost',
    apiPort: 3012,

    port: process.env.PORT || 3012,
    publicDir: path.join(__dirname, '../public'),
    clientDir: path.join(__dirname, '../client'),

    webpackHost: 'localhost',
    webpackPort: 9000,

    dbURL: 'mongodb://localhost:27017/api'
};