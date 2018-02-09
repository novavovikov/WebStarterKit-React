const path = require('path');

exports.env = {
    port: 3000,
    database: {
        secret: 'thisisnotbullshit',
        uri: `mongodb://localhost:27017/api`,
        options: {}
    },
    api: {
        uri: `/api`,
        version: ``,
        host: `localhost`,
        port: 3000
    },
    webpack: {
        host: `localhost`,
        port: 9000
    },
    path: {
        public: path.join(__dirname, `../public`),
        client: path.join(__dirname, `../client`),
        server: path.join(__dirname, `../server`),
        favicon: path.join(__dirname, `../client/favicon.ico`)
    }
};