// validate config variables are present
function configValidation(config) {
  const { db: { name: dbName, user: dbUser, password: dbPassword }, jwt: { secret: jwtSecret } } = config;
  const requiredMissing = [];

  if (!dbName) requiredMissing.push('SO_DB_NAME');
  if (!dbUser) requiredMissing.push('SO_DB_USER');
  if (!dbPassword) requiredMissing.push('SO_DB_PASSWORD');
  if (!jwtSecret) requiredMissing.push('SO_JWT_SECRET');

  if (requiredMissing.length > 0) {
    console.error(`[CONFIG][ERROR] Missing required configuration variables: ${requiredMissing.join(', ')}. Please check your .env file.`);
    process.exit(1);
  } else {
    console.log('[CONFIG] Environment configuration validated successfully. All required variables are present.');
  }
}

module.exports = configValidation;
