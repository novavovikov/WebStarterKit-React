import express from 'express';
import session from 'express-session';
import favicon from 'serve-favicon';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import routes from './routes';
import api from './routes/api';

//params
const app = express();
const MongoStore = require('connect-mongo')(session);

// view engine setup
app.use(express.static(config.path.public));
app.set('views', config.path.client);
app.set('view engine', 'pug');
app.locals.pretty = true;

app.use(favicon(config.path.favicon));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(cookieParser());
app.use(morgan('dev'));

//sessions
app.use(session({
    secret: config.database.secret,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
        url: config.database.uri
    })
}));

//routes
app.use('/api', api);
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

module.exports = app;