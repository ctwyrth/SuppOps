// bring in hidden environment variables
const config = require('./envConfig');
const { db: { host: dbHost, port: dbPort, name: dbName, user: dbUser, password: dbPassword, authSource: dbAuth } } = config;

// add db middleware
const mongoose = require('mongoose');
const mongoDBUrl = `mongodb://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}?authSource=${dbAuth}`;

// connect to server
async function connectToDatabase() {
  console.log('[DB] Trying to connect to MongoDB');
  try {
    await mongoose.connect(mongoDBUrl);
    console.log('[DB] Mongoose connected successfully on port' + dbPort + '/' + dbName);
  } catch (err) {
    console.error('[DB][ERROR] Mongoose connection error:', err.message);
    throw err;
  }
}

module.exports = connectToDatabase;
