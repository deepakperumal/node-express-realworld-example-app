const mongoose = require('mongoose');

const  user = mongoose.Schema({
    username: String,
    email: String,
    company:String,
    password:String,
    access:String
}, {
    timestamps: true
});

module.exports = mongoose.model('user', user);  