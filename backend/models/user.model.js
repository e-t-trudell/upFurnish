const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    userName: { type: String },
    email: { type: String },
    password: { type: String },
}, { timestamps: true });
module.exports = mongoose.model('User', UserSchema);