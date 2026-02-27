const http = require('http');

/**
 * Create an HTTP server and assign it to the variable 'app'.
 * The server responds with "Hello Holberton School!" for any endpoint.
 */
const app = http.createServer((req, res) => {
  // Set the response status code to 200 (OK)
  res.statusCode = 200;

  // Set the Content-Type header to plain text
  res.setHeader('Content-Type', 'text/plain');

  // Send the body content and signal the end of the response
  res.end('Hello Holberton School!');
});

// Make the server listen on port 1245
app.listen(1245);

// Export the 'app' variable so it can be used in other files or tests
module.exports = app;
