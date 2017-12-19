import User from '../models/user';
import jwt from 'jsonwebtoken';

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
                const payload = {
                    id: user._id,
                    username: user.username,
                    admin: user.admin
                };
                const token = jwt.sign(payload, config.database.secret, {
                    expiresIn: 60*60*24*30 // expires in 30 days
                });
                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
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