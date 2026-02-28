const fs = require('fs');

/**
 * Counts students in a CSV file asynchronously.
 * @param {string} path The path to the database file.
 * @returns {Promise<void>}
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read file asynchronously
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        // If file cannot be read, reject the promise with an error
        reject(new Error('Cannot load the database'));
        return;
      }

      // Process the data once read
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      
      // Remove header row
      const studentData = lines.slice(1);
      const totalStudents = studentData.length;

      console.log(`Number of students: ${totalStudents}`);

      const fields = {};

      studentData.forEach((line) => {
        const student = line.split(',');
        // Column 0 is firstname, Column 3 is field
        const firstName = student[0];
        const field = student[3];

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      });

      for (const [field, names] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      // Resolve the promise when everything is logged
      resolve();
    });
  });
}

module.exports = countStudents;
