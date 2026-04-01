// bring in hidden variables
const config = require('./envConfig');
const { db: { host: dbHost, port: dbPort, name: dbName, user: dbUser, password: dbPassword, authSource: dbAuth } } = config;

// add db middleware
const mongoose = require('mongoose');
const mongoDBUrl = `mongodb://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}?authSource=${dbAuth}`;

// validate config variables are present
if (!dbName || !dbUser || !dbPassword || !dbAuth) {
  console.error('Missing required database configuration variables. Please check your .env file.');
  process.exit(1);
} else {
  console.log('[DB] Database configuration variables loaded successfully');
}

// connect to server
async function connectToDatabase() {
  console.log('[DB] Trying to connect to MongoDB');
  try {
    await mongoose.connect(mongoDBUrl);
    console.log('[DB] Mongoose connected successfully on port', dbPort);
  } catch (err) {
    console.error('[ERROR] Mongoose connection error:', err);
    throw err;
  }
}

module.exports = connectToDatabase;
