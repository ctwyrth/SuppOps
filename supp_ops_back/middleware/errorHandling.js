const errorHandler = (err, req, res, next) => {
  // is this a known or unknown error
  if (err.statusCode) {
    console.error(`Known error: ${err.message} (Status Code: ${err.statusCode})`);

    // inspect error object for status code and message, defaulting to 500 and a generic message if not provided
    let errorStatus = err.statusCode || 500;
    let errorMessage = err.message || 'An unexpected error occurred. Please try again later.';
  } else {
    console.error('Unknown error:', err);

    // for unknown errors, don't expose details to client, but log them for debugging
    let errorStatus = 500;
    let errorMessage = 'An unexpected error occurred. Please try again later.';
  }
  
  // build and send a safe response to the client
  res.status(errorStatus).json({ status: 'ERROR', message: errorMessage });
}

module.exports = errorHandler;