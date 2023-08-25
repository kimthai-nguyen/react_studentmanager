import React, { useState, useEffect } from 'react';

function StudentForm({ addStudent, selectedStudent, updateStudent }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    if (selectedStudent) {
      setName(selectedStudent.name);
      setAge(selectedStudent.age);
    } else {
      setName('');
      setAge('');
    }
  }, [selectedStudent]);
  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() !== '' && age.trim() !== '') {
      const newStudent = {
        id: selectedStudent ? selectedStudent.id : Date.now(),
        name,
        age,
      };
      if (selectedStudent) {
        updateStudent(newStudent);
      } else {
        addStudent(newStudent);
      }
      setName('');
      setAge('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={e => setAge(e.target.value)}
      />
      <button type="submit">
        {selectedStudent ? 'Update Student' : 'Add Student'}
      </button>
    </form>
  );
}

export default StudentForm;