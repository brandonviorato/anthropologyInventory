const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");

dotenv.config();

const MAX_AGE = 3 * 24 * 60 * 60 // 3 days

const secret = process.env.JWT_SECRET

const createToken = (id) => {
    console.log(secret)
    return jwt.sign({ id }, secret, {
        expiresIn: MAX_AGE
    });
}

module.exports = createToken;