const   express = require('express'),
        bodyParser = require('body-parser'),
        MongoClient = require('mongodb').MongoClient,
        ObjectID = require('mongodb').ObjectID,
        db = require('./db');

//controllers
const artistsController = require('./controllers/artists');

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

app.get(`${BASE_URL}/artists/:id`, function (req, res) {
    db.get().collection(`artists`).findOne(
        { _id: ObjectID(req.params.id) },
        function(err, doc) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.send(doc);
        }
    );
});

app.post(`${BASE_URL}/artists`, function (req, res) {
    if (Object.keys(req.body).length > 0 && req.body.name) {
        let artist = {
            name: req.body.name
        }

        db.get().collection('artists').insert(artist, function(err, result) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        })
    } else {
        res.sendStatus(400);
    }

});

app.put(`${BASE_URL}/artists/:id`, function (req, res) {
    db.get().collection('artists').updateOne(
        { _id: ObjectID(req.params.id) },
        { name: req.body.name },
        function(err, result) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        }
    )
});

app.delete(`${BASE_URL}/artists/:id`, function (req, res) {
    db.get().collection('artists').deleteOne(
       { _id: ObjectID(req.params.id)},
        function (err, result) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        }
    )
});

//run server
db.connect('mongodb://localhost:27017/api', function(err) {
    if (err) return console.log(err);
    app.listen(PORT, function () {
        console.log('API app started');
    });
})