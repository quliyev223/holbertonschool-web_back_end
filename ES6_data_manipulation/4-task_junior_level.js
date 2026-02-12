export default function updateStudentGradeByCity(array, city, newGrades) {
  return array
    // First, we filter the array to get only students from the target city
    .filter((student) => student.location === city)
    // Then, we modify each student in that city
    .map((student) => {
      // 1. Set a default value for the grade
      student.grade = 'N/A';

      // 2. Look through newGrades to find a match for this student
      for (const gradeObj of newGrades) {
        if (gradeObj.studentId === student.id) {
          // 3. If found, update the grade and STOP the loop
          student.grade = gradeObj.grade;
          break; 
        }
      }

      // 4. Return the updated student object
      return student;
    });
}
