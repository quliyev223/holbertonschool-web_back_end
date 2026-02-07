/**
 * Represents a course at Holberton School.
 */
export default class HolbertonCourse {
  /**
   * Creates a new HolbertonCourse.
   * @param {string} name - The name of the course.
   * @param {number} length - How many months the course lasts.
   * @param {string[]} students - Array of strings containing student names.
   */
  constructor(name, length, students) {
    // We call the setters here to ensure type validation during instantiation
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Getter and Setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Getter and Setter for length
  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  // Getter and Setter for students
  get students() {
    return this._students;
  }

  set students(value) {
    // Validating that students is an array and every element is a string
    if (!Array.isArray(value)) {
      throw new TypeError('Students must be an array');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
