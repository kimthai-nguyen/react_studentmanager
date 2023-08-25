import React from 'react';
import StudentItem from './StudentItem';

function StudentList({ students, editStudent, deleteStudent }) {
  return (
    <ul>
      {students.map(student => (
        <StudentItem
          key={student.id}
          student={student}
          editStudent={editStudent}
          deleteStudent={deleteStudent}
        />
      ))}
    </ul>
  );
}
export default StudentList;