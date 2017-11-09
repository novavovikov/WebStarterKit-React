import User from '../models/user';
import crypto from 'crypto';

exports.all = function(req, res) {
    User.find({}, function(err, users) {
        if (err) return res.send(err);
        res.send(users.map((item) => item.username));
    });
};

exports.create = function(req, res) {
    const user = new User({
        username: req.body.username,
        password: hash(req.body.password)
    });

    user.save((err, createdUser) => {
        if (err) return res.send(err);
        res.send(createdUser);
    });
};

exports.getUser = function(id) {
    return User.findOne(id);
};

exports.delete = function(req, res) {
    User.remove({ _id: req.params.id }, function(err, user) {
        if (err) return res.send(err);
        res.sendStatus(200);
    });
};

function hash(text) {
    return crypto.createHash('sha1').update(text).digest('base64')
}