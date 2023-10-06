const jwt = require('jsonwebtoken');
require('dotenv').config();
const key=process.env.NEXT_PUBLIC_ENCRYPT_API;
function authenticateToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Verify and decode the token
  token==key ? next() : res.status(403).json({ message: 'Forbidden' });
}

module.exports = {
  authenticateToken,
};