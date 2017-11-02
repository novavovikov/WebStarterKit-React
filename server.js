//dependencies
const   express = require('express'),
        bodyParser = require('body-parser'),
        MongoClient = require('mongodb'),
        ObjectID = require('mongodb').ObjectID;

//params
let db;
const app = express();
const   BASE_URL = '/api',
        PORT = 3012;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
}));

let artists = [
    {
        id: 1,
        name: 'Metallica'
    },
    {
        id: 2,
        name: 'Iron Maiden'
    },
    {
        id: 3,
        name: 'Deep Purple'
    }
];

app.get(BASE_URL, function (req, res) {
    res.sendStatus(200)
});

//routes
app.get(`${BASE_URL}/artists`, function (req, res) {
    db.collection(`artists`).find().toArray(function (err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
});

app.get(`${BASE_URL}/artists/:id`, function (req, res) {
    db.collection(`artists`).findOne({
        _id: ObjectID(req.params.id)
    }, function(err, doc) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc);
    });
});

app.post(`${BASE_URL}/artists`, function (req, res) {
    if (Object.keys(req.body).length > 0 && req.body.name) {
        let artist = {
            name: req.body.name
        }

        db.collection('artists').insert(artist, function(err, result) {
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
    let artist = artists.find((artist) => artist.id === Number(req.params.id));
    if (req.body.name) {
        artist.name = req.body.name;
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
});

app.delete(`${BASE_URL}/artists/:id`, function (req, res) {
    artists = artists.filter((artist) => artist.id !== Number(req.params.id));
    res.sendStatus(200);
});

//run server
MongoClient.connect('mongodb://localhost:27017/api', function(err, database) {
    if (err) return console.log(err);

    db = database
    app.listen(PORT, function () {
        console.log('API app started');
    });
})