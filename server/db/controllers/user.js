import User from '../models/user';

exports.all = function(req, res) {
    if (req.query.name) {
        User.findUsersByName(req.query.name, (err, users) => {
            if (err) return res.send(err);
            res.send(users);
        });
    } else {
        User.find({}, function(err, users) {
            if (err) return res.send(err);
            res.send(users);
        });
    }
};

exports.create = function(req, res) {
    if (req.body.name === undefined) return res.send('Name is empty');
    const user = new User({
        name: req.body.name
    });

    user.save((err, createdUser) => {
        if (err) return res.send(err);
        res.send(createdUser);
    });
};

exports.findById = function(req, res) {
    User.findById(req.params.id, function(err, user) {
        if (err) return res.send(err);
        res.send(user);
    });
};