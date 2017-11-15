import User from '../models/user';

exports.all = function(req, res) {
    User.find({}, function(err, users) {
        if (err) return res.send(err);
        res.send(users);
    });
};

exports.create = function(req, res) {
    const user = new User({
        username: req.body.username,
        password: User.encryptPassword(req.body.password)
    });

    user.save((err, createdUser) => {
        if (err) return res.send(err);
        res.send(createdUser);
    });
};

exports.getUser = function(id) {
    return User.findOne(id);
};

exports.checkUser = function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({username: username}, function (err, user) {
        if (err) return res.send(err);
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

exports.checkSession = function(req, res) {
    res.send(req.session.user);
};

exports.delete = function(req, res) {
    User.remove({ _id: req.params.id }, function(err, user) {
        if (err) return res.send(err);
        res.sendStatus(200);
    });
};