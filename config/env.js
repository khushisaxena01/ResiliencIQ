require('dotenv').config();

module.exports = {
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/resilienciq',
  JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret_key',
  PORT: process.env.PORT || 5000,
  // Add other env vars as needed
};
