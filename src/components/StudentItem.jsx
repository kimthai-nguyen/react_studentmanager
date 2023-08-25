import React from 'react';

function StudentItem({ student, editStudent, deleteStudent }) {
  return (
    <li>
      {student.name} - {student.age}
      <button onClick={() => editStudent(student)}>Edit</button>
      <button onClick={() => deleteStudent(student.id)}>Delete</button>
    </li>
  );
}

export default StudentItem;