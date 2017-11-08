import express from 'express';
const router = express.Router();
var api = require('../db/controllers/user');

/* Создание пользователя */
router.post('/login', function(req, res, next) {
    if (req.session.user) return res.redirect('/');

    api.checkUser(req.body, function(user) {
        if(user){
            req.session.user = {id: user._id, name: user.name};
            res.redirect('/')
        } else {
            res.sendStatus(404)
        }
    })
});

router.post('/', function(req, res, next) {
    api.createUser(req.body)
        .then(function(result){
            console.log("User created")
        })
        .catch(function(err){
            if (err.toJSON().code == 11000){
                res.status(500).send("This email already exist")
            }
        })
});

router.post('/logout', function(req, res, next) {
    if (req.session.user) {
        delete req.session.user;
        res.redirect('/')
    }
});

module.exports = router;