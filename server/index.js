global.config = require('../config/config').env;

require('babel-register');
require('./server');