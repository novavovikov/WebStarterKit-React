import express from 'express';
import session from 'express-session';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { PATH, ENV } from './config';

import routes from './routes';
import api from './routes/api';
import auth from './routes/auth';

//params
const app = express();
const MongoStore = require('connect-mongo')(session);

// view engine setup
app.use(express.static(PATH.public));
app.set('views', PATH.client);
app.set('view engine', 'pug');
app.locals.pretty = true;

// app.use(favicon(PATH.favicon));

app.use(logger('dev'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(cookieParser());

//sessions
app.use(session({
    secret: 'i need more beers',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
        url: ENV.dbURL
    })
}));

//routes
app.use('/api', api);
app.use('/auth', auth);
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

module.exports = app;