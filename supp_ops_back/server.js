const config = require('./config/envConfig');
const connectToDatabase = require('./config/dbConfig');
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
