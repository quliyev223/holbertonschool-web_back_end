const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read file asynchronously with utf8 encoding
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        // Reject the promise if the file is missing or unreadable
        reject(new Error('Cannot load the database'));
        return;
      }

      // Filter out empty lines and split by newline
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const studentData = lines.slice(1); // Remove header
      
      const report = []; // Array to store all output lines
      const totalMsg = `Number of students: ${studentData.length}`;
      
      console.log(totalMsg);
      report.push(totalMsg);

      const fields = {};
      studentData.forEach((line) => {
        const student = line.split(',');
        const firstName = student[0];
        const field = student[3];

        if (!fields[field]) fields[field] = [];
        fields[field].push(firstName);
      });

      for (const [field, names] of Object.entries(fields)) {
        const fieldMsg = `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
        console.log(fieldMsg);
        report.push(fieldMsg);
      }

      // Resolve the promise with the full report as a single string
      resolve(report.join('\n'));
    });
  });
}

module.exports = countStudents;
