import User from '../models/user';

exports.all = function(req, res, next) {
    User.find({}, function(err, users) {
        if (err) return next(err);
        res.send(users);
    });
};

exports.create = function(req, res, next) {
    const user = new User({
        username: req.body.username,
        password: User.encryptPassword(req.body.password)
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
        console.log(req.body);

        if (user) {
            if (user.checkPassword(password)) {
                req.session.user = user._id;
                res.sendStatus(200)
            } else {
                res.sendStatus(403)
            }
        } else {
            res.sendStatus(403)
        }
    });
};

exports.checkSession = function(req, res, next) {
    res.send(req.session.user);
};

exports.delete = function(req, res, next) {
    User.remove({ _id: req.params.id }, function(err, user) {
        if (err) return next(err);
        res.sendStatus(200);
    });
};