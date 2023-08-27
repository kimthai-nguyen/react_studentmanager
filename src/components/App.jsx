import React, { useState } from 'react';
import StudentList from './StudentList';
import StudentForm from './StudentForm';
import './App.scss';

function App() {
  // const [students, setStudents] = useState([]);
  const [students, setStudents] = useState(JSON.parse(localStorage.getItem("students") ?? "[]"));
  const [selectedStudent, setSelectedStudent] = useState(null);

  const addStudent = student => {
    setStudents([...students, student]);
    localStorage.setItem("students",JSON.stringify(students))
  };

  const editStudent = student => {
    setSelectedStudent(student);
    localStorage.setItem("students",JSON.stringify(students))
  };
  const updateStudent = updatedStudent => {
    const updatedStudents = students.map(student =>
      student.id === updatedStudent.id ? updatedStudent : student
    );
    setStudents(updatedStudents);
    setSelectedStudent(null);
    localStorage.setItem("students",JSON.stringify(updatedStudents))

  };

  const deleteStudent = studentId => {
    const updatedStudents = students.filter(student => student.id !== studentId);
    setStudents(updatedStudents);
    localStorage.setItem("students",JSON.stringify(updatedStudents))
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
