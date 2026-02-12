export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObject = newGrades.filter((grade) => grade.studentId === student.id)[0];
      return {
        ...student,
	grade: gradeObject ? gradeObject.grade : 'N/A',
      };
    });
}
