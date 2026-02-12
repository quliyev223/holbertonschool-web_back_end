/**
 * Returns the sum of all student ids.
 * @param {Array} students - The list of student objects.
 * @returns {Number} The total sum of all student ids.
 */
export default function getStudentIdsSum(students) {
  // Check if the input is an array to avoid errors
  if (!Array.isArray(students)) {
    return 0;
  }

  // Use the reduce method to accumulate the sum of ids
  // 'sum' is the accumulator, 'student' is the current object in the iteration
  // '0' is the initial value for the sum
  return students.reduce((sum, student) => sum + student.id, 0);
}
