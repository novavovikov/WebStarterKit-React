exports.checkSession = function(req, res, next) {
    if (req.session.user) {
        res.json({
            success: true,
            message: 'Enjoy your token!',
            token: req.session.user
        });
    }
    res.sendStatus(404);
};

exports.destroySession = function(req, res, next) {
    req.session.destroy();
    res.sendStatus(200);
};