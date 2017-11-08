import User from '../models/user';
import crypto  from 'crypto';

exports.createUser = function(userData){
    var user = {
        name: userData.name,
        email: userData.email,
        password: hash(userData.password)
    };
    return new User(user).save()
};

exports.getUser = function(id) {
    return User.findOne(id)
};

exports.checkUser = function(userData, cb) {
    User.findOne({ email: userData.email }, function (err, doc){
        if (err) return console.log(err);
        cb(doc);
    });
};

function hash(text) {
    return crypto.createHash('sha1')
        .update(text).digest('base64')
}

// .then(function(doc){
//     if ( doc.password == hash(userData.password) ){
//         console.log("User password is ok");
//         return Promise.resolve(doc)
//     } else {
//         return Promise.reject("Error wrong")
//     }
// })