exports.checkSession = function(req, res, next) {
    res.send(req.session.user);
};

exports.destroySession = function(req, res, next) {
    req.session.destroy();
    res.sendStatus(200);
};