const   	express = require('express'),
		  	path = require('path'),
		  	bodyParser = require('body-parser'),
		  	db = require('./db'),
			//controllers
			artistsController = require('./db/controllers/artists');

//params
const app = express();
const   BASE_URL = '/api',
        PORT = 3012;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/public'));

//routes
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public'));
});

app.get(BASE_URL, function (req, res) {
    res.sendStatus(200)
});

//api
app.get(BASE_URL + '/artists', artistsController.all);
app.get(BASE_URL + '/artists/:id', artistsController.findById);
app.post(BASE_URL + '/artists', artistsController.create);
app.put(BASE_URL + '/artists/:id', artistsController.update);
app.delete(BASE_URL + '/artists/:id', artistsController.delete);


//run server
db.connect('mongodb://localhost:27017/api', function(err) {
    if (err) return console.log(err);
    app.listen(PORT, function () {
        console.log('API app started');
    });
});