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
    User.findById('5a01d658ee454d2fec9e0144', function(err, user) {
        if (err) return res.send(err);
        res.send(user);
    });
};

exports.findByName = function(req, res) {
    User.find({
        name: new RegExp('use', 'i')
    }, function(err, user) {
        if (err) return res.send(err);
        res.send(user);
    });
};

exports.all = function(req, res) {
    User.find({}, function(err, users) {
        if (err) return res.send(err);
        res.send(users);
    });
};