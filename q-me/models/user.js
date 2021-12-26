const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    fullname: String,
    username: String,
    password: String,
});

module.exports = mongoose.model('User', userSchema);