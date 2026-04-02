// set up access to .env variables
require('dotenv').config();

// attach validation to config loading
const configValidation = require('./validateConf');

const config = {
  env: process.env.SO_NODE_ENV || 'development',
  port: process.env.SO_PORT || 3000,
  db: {
    host: process.env.SO_DB_HOST || '127.0.0.1',
    port: process.env.SO_DB_PORT || 27017,
    name: process.env.SO_DB_NAME,
    user: process.env.SO_DB_USER,
    password: process.env.SO_DB_PASSWORD,
    authSource: process.env.SO_DB_AUTH_SOURCE,
  },
  jwt: {
    secret: process.env.SO_JWT_SECRET
  },
};

configValidation(config);

module.exports = config;