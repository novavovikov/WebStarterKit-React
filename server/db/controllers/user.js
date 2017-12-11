import User from '../models/user';
import { config } from '../../../config/env';

exports.all = function(req, res, next) {
    User.find({}, function(err, users) {
        if (err) return next(err);
        res.send(users);
    });
};

exports.create = function(req, res, next) {
    const user = new User({
        username: req.body.username.toLowerCase(),
        password: User.encryptPassword(req.body.password),
        admin: req.body.admin
    });

    user.save((err, createdUser) => {
        if (err) return next(err);
        res.send(createdUser);
    });
};

exports.getUser = function(id) {
    return User.findOne(id);
};

exports.checkUser = function(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({username: username}, function (err, user) {
        if (err) return next(err);

        if (user) {
            if (user.checkPassword(password)) {
                req.session.user = Buffer.from((Buffer.from(`{"username": "${user.username}", "id": "${user._id}"}`).toString('hex')) + config.database.secret).toString('base64');
                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: req.session.user
                });
            } else {
                res.sendStatus(403)
            }
        } else {
            res.sendStatus(403)
        }
    })
};

exports.delete = function(req, res, next) {
    User.remove({ _id: req.params.id }, function(err, user) {
        if (err) return next(err);
        res.sendStatus(200);
    });
};