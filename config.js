const path = require('path');

module.exports.ENV = {
	apiUrl: '/api',
	apiHost: 'localhost',
	apiPort: 3012,

	port: process.env.PORT || 3000,

	webpackHost: 'localhost',
	webpackPort: 9000,

	dbURL: 'mongodb://localhost:27017/api'
};

module.exports.PATH = {
	public: path.join(__dirname, 'public'),
	views: path.join(__dirname, 'views'),
	client: path.join(__dirname, 'client'),
	server: path.join(__dirname, 'server'),
};