import Artist from '../models/artist';

exports.all = function(req, res) {
	Artist.find({}, function(err, docs) {
		if (err) return res.sendStatus(500);
		res.send(docs);
	})
};

exports.findById = function(req, res) {
	Artist.findById(req.params.id , function(err, doc) {
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(doc);
	})
};

exports.create = function(req, res) {
    if (req.body.name === undefined) return res.send('Name is empty');
    const artist = new Artist({
        name: req.body.name
    });

    artist.save((err, createdArtist) => {
        if (err) return res.send(err);
        res.send(createdArtist);
    });
};

exports.update = function(req, res) {
	Artist.update({ _id: req.params.id } , { name: req.body.name }, function(err, result) {
		if (err) return res.sendStatus(500);
		res.send(result);
	})
};

exports.delete = function(req, res) {
	Artist.remove({_id: req.params.id} , function(err, result) {
		if (err) return res.sendStatus(500);
		res.send(result);
	})
};