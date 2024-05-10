import React from 'react';
import './Attendance.css';

const AttendanceTable = ({ students, handleCheckboxChange }) => {
  return (
    <table className="attendance-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Standard/Class</th>
          <th>Attendance Status</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <tr key={student._id}>
            <td>{student.fname} {student.lname}</td>
            <td>{student.standard}</td>
            <td>{student.status}</td>
            <td>{new Date(student.date).toLocaleDateString()}</td>
            <td>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={student.status === 'present'}
                  onChange={() => handleCheckboxChange(student._id, student.status === 'present' ? 'absent' : 'present')}
                />
                <span className="checkbox-custom"></span>
              </label>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AttendanceTable;
