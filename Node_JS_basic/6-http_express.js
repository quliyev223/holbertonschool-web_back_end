const express = require('express'); // Import the express module

// Create an instance of the express application
const app = express();
const PORT = 1245;

// Define a route for the root path '/'
app.get('/', (req, res) => {
  // Send the greeting message as the response body
  res.send('Hello Holberton School!');
});

// Make the server listen on the specified port
app.listen(PORT);

// Export the app variable for external use
module.exports = app;
