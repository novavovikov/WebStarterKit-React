const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String
});

userSchema.statics.findUserByName = (name, cb) => {
    return this.findOne({
        name: new RegExp(name, 'i')
    }, cb);
};

const User = mongoose.model('User', userSchema);