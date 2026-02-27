const fs = require('fs');

/**
 * Counts students from a CSV file synchronously.
 * @param {string} path The path to the CSV file.
 */
function countStudents(path) {
  try {
    // Read file synchronously and convert buffer to string
    const data = fs.readFileSync(path, 'utf8');

    // Split by newline and filter out empty lines or headers
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Remove the header (first line)
    const studentData = lines.slice(1);

    console.log(`Number of students: ${studentData.length}`);

    const fields = {};

    studentData.forEach((line) => {
      const student = line.split(',');
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
