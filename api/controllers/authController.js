const User = require('../models/user.js');

// handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { username: '', password: '' };

    // duplicate error code
    if (err.code === 11000) {
        errors.username = 'That username is already registered';
    }

    // validation errors
    if (err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
}

const signup = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.create({ username, password });
        res.status(201);
        res.json(user);
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400);
        res.json({ errors });
    }
}

const login = async (req, res) => {
    const { username, password } = req.body;

    console.log(username, password);
    res.send('user login');
}

module.exports = {
    signup,
    login
}