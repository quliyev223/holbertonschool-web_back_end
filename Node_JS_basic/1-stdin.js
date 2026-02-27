// Display the prompt
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for data input
process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write('Your name is: ' + chunk);
  }
});

// Close message when input stream ends
process.stdin.on('end', function() {
  process.stdout.write('This important software is now closing\n');
});