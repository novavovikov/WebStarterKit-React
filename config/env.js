const path = require('path');

module.exports = {
    apiUrl: '/api',
    apiHost: 'localhost',
    apiPort: 3012,

    port: process.env.PORT || 3000,
    publicDir: path.join(__dirname, '../../public'),
    distDir: path.join(__dirname, '../../dist'),
    clientDir: path.join(__dirname, '../client'),
    serverDir: path.join(__dirname, '../server'),

    webpackHost: 'localhost',
    webpackPort: 9000,

    dbURL: 'mongodb://localhost:27017/api'
};