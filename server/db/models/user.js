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

userSchema.statics.findUsersByName = function (name, cb) {
    return this.find({
        name: new RegExp(name, 'i')
    }, cb);
};

const User = mongoose.model('User', userSchema);

module.exports = User;