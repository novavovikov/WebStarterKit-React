const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String
});

userSchema.statics.findUsersByName = function (name, cb) {
    return this.find({
        name: new RegExp(name, 'i')
    }, cb);
};

const User = mongoose.model('User', userSchema);

module.exports = User;