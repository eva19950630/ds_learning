var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
	username: String,
	email: String,
	password: String
});
userSchema.methods.validPassword = function(pwd) {
    return (this.password === pwd);
};

var User = mongoose.model('User', userSchema);

module.exports.User = User;