import express from 'express';
import path from 'path';
import http from 'http';
import bodyParser from 'body-parser';
import db from './db';
import config from '../config/env';

//controllers
import artistsController from './db/controllers/artists';

//params
const app = express();
let server = http.createServer(app);

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, '../public')));

//routes
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public'));
});

app.get(config.apiUrl, function (req, res) {
    res.sendStatus(200)
});

//api
app.get(config.apiUrl + '/artists', artistsController.all);
app.get(config.apiUrl + '/artists/:id', artistsController.findById);
app.post(config.apiUrl + '/artists', artistsController.create);
app.put(config.apiUrl + '/artists/:id', artistsController.update);
app.delete(config.apiUrl + '/artists/:id', artistsController.delete);
//route
app.get('*', function (req, res) {
    console.log(req.originalUrl);
	res.redirect('/');
});

//run server
db.connect(config.dbURL, function(err) {
    if (err) return console.log(err);
    server.listen(config.port, function () {
        console.log('App started');
    });
});