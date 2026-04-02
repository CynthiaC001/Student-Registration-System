const jwt = require('jsonwebtoken');

// Secret key for signing JWTs
const secretKey = 'your-secret-key';

// Function to generate a JWT token
function generateToken(payload) {
    return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

// Function to verify a JWT token
function verifyToken(token) {
    return jwt.verify(token, secretKey);
}

module.exports = { generateToken, verifyToken };