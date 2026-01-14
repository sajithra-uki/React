import React from 'react';


const StudentTable = React.memo(({ students, onStudentSelect }) => {
  return (
    <table>
      <>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Course</th>
          <th>Country</th>
          <th>Profile</th>
        </tr>
      </>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.course}</td>
            <td>{student.country}</td>
            <td>
              <button 
                className="view-btn"
                onClick={() => onStudentSelect(student.id)}
              >
                view
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});

export default StudentTable;