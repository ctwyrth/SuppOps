console.log("[STARTUP] Initializing the SuppOps Express server");

const config = require('./config/envConfig');

// attach validation to config loading
const configValidation = require('./config/validateConf');
const connectToDatabase = require('./config/dbConfig');

// run environment variable validation before starting the server
configValidation(config);

const server = require('./app');

connectToDatabase()
  .then(() => {
    server.listen(config.port, () => {
      console.log(`[SERVER] Server is running on http://localhost:${config.port} in ${config.env} mode`);
    });
  })
  .catch(err => {
    console.error('[FATAL ERROR] Server startup aborted:', err.message);
    process.exit(1);
  });
