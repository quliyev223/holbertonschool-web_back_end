const http = require('http');
const countStudents = require('./3-read_file_async');

const DB_PATH = process.argv[2]; // Get database file from CLI arguments

// Create the HTTP server
const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    // Root route
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // Students list route
    res.write('This is the list of our students\n');
    try {
      // Wait for the async student counting function
      const data = await countStudents(DB_PATH);
      res.end(data);
    } catch (error) {
      // Handle file reading errors
      res.end(error.message);
    }
  }
});

app.listen(1245); // Listen on port 1245
module.exports = app; // Export for external use
