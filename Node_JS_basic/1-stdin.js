// Display the welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Read input from stdin
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

// Display message on exit
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
