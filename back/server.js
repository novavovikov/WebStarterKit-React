const   express = require('express'),
        bodyParser = require('body-parser'),
        MongoClient = require('mongodb').MongoClient,
        ObjectID = require('mongodb').ObjectID,
        db = require('./db');

//controllers
const artistsController = require('./db/controllers/artists');

//params
const app = express();
const   BASE_URL = '/api',
        PORT = 3012;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get(BASE_URL, function (req, res) {
    res.sendStatus(200)
});

//routes
app.get(`${BASE_URL}/artists`, artistsController.all);
app.get(`${BASE_URL}/artists/:id`, artistsController.findById);
app.post(`${BASE_URL}/artists`, artistsController.create);
app.put(`${BASE_URL}/artists/:id`, artistsController.update);
app.delete(`${BASE_URL}/artists/:id`, artistsController.delete);

//run server
db.connect('mongodb://localhost:27017/api', function(err) {
    if (err) return console.log(err);
    app.listen(PORT, function () {
        console.log('API app started');
    });
})