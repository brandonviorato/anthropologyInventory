const mongoose = require('mongoose');
const { isAlpha } = require('validator');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Please enter a username'],
        unique: true,
        lowercase: true,
        validate: [isAlpha, 'Username must contain letters only. No numbers or special characters allowed.']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minLength: [6, 'Password must be at least 6 characters long']
    },
});

// log signup after doc saved to db
userSchema.post('save', function (doc, next) {
    console.log('new user was created and saved', doc);
    next();
})

// hash password before saving doc to db
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;