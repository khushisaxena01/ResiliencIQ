const mongoose = require('mongoose');
const env = require('./env');

const connect = async () => {
  try {
    await mongoose.connect(env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('****\nMongoDB connected successfully\n****');
  } catch (err) {
    console.error('****\nMongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = {
  connect,
};
