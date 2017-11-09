const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username : {
        type: String,
        unique: true,
        required: true
    },
    password : {
        type: String,
        required: true
    }
});

userSchema.statics.findUsersByName = function (username, cb) {
    return this.find({
        username: new RegExp(username, 'i')
    }, cb);
};

const User = mongoose.model('User', userSchema);

module.exports = User;