//dependencies
const   express = require('express'),
        bodyParser = require('body-parser');

//params
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
    res.send('API run')
});

//routes
app.get(`${BASE_URL}/artists`, function (req, res) {
    res.send(artists);
});

app.get(`${BASE_URL}/artists/:id`, function (req, res) {
    let artist = artists.find((artist) => artist.id === Number(req.params.id));
    res.send(artist);
});

app.post(`${BASE_URL}/artists`, function (req, res) {
    if (Object.keys(req.body).length > 0 && req.body.name) {
        let artist = {
            id: Date.now(),
            name: req.body.name
        }

        artists.push(artist);
        res.sendStatus(200);
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
app.listen(PORT, function () {
    console.log('API app started');
});