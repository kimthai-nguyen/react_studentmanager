import React, { useState } from 'react';
import StudentList from './StudentList';
import StudentForm from './StudentForm';
import './App.scss';

function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const addStudent = student => {
    setStudents([...students, student]);
  };

  const editStudent = student => {
    setSelectedStudent(student);
  };
  const updateStudent = updatedStudent => {
    const updatedStudents = students.map(student =>
      student.id === updatedStudent.id ? updatedStudent : student
    );
    setStudents(updatedStudents);
    setSelectedStudent(null);
  };

  const deleteStudent = studentId => {
    const updatedStudents = students.filter(student => student.id !== studentId);
    setStudents(updatedStudents);
  };

  return (
    <div className="App">
      <h1>Student List</h1>
      <StudentList
        students={students}
        editStudent={editStudent}
        deleteStudent={deleteStudent}
      />
      <StudentForm
        addStudent={addStudent}
        selectedStudent={selectedStudent}
        updateStudent={updateStudent}
      />
    </div>
  );
}

export default App;
