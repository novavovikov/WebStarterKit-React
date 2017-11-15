import mongoose from 'mongoose';
import crypto from 'crypto';

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

userSchema.statics.encryptPassword = function(password) {
    return crypto.createHash('sha1').update(password).digest('base64')
};

userSchema.methods.checkPassword = function(password) {
    return User.encryptPassword(password) === this.password;
};

const User = mongoose.model('User', userSchema);

module.exports = User;