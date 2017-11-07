const path = require('path');

module.exports.ENV = {
	port: process.env.PORT || 3000,

	apiUrl: '/api',
	apiHost: 'localhost',
	apiPort: 3000,

	webpackHost: 'localhost',
	webpackPort: 9000,

	dbURL: 'mongodb://localhost:27017/api'
};

module.exports.PATH = {
	public: path.join(__dirname, '../public'),
	client: path.join(__dirname, '../client'),
	server: path.join(__dirname),
	favicon: path.join(__dirname, '../client/favicon.ico')
};