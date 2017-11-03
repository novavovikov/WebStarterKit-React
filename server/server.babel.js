const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const db = require('./db');
const config = require('../config/env');

//controllers
const artistsController = require('./db/controllers/artists');

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
	res.redirect('/');
});

//run server
db.connect(config.dbURL, function(err) {
    if (err) return console.log(err);
    server.listen(config.port, function () {
        console.log('App started');
    });
});