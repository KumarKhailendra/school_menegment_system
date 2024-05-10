import React from 'react';
import './Attendance.css';


const ClassSelector = ({ selectedClass, handleClassChange }) => {
  return (
    <div className="class-selector-container">
      <select value={selectedClass} onChange={e => handleClassChange(e.target.value)} className="class-selector">
        <option value="">Select Class</option>
        <option value="1">Class 1</option>
        <option value="2">Class 2</option>
        <option value="3">Class 3</option>
        <option value="4">Class 4</option>
        <option value="5">Class 5</option>
        <option value="6">Class 6</option>
        <option value="7">Class 7</option>
        <option value="8">Class 8</option>
        <option value="9">Class 9</option>
        <option value="10">Class 10</option>
        <option value="11">Class 11</option>
        <option value="12">Class 12</option>
      </select>
    </div>
  );
};

export default ClassSelector;
