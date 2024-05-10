"use client";

import React, { useState, useEffect } from 'react';
import DatePicker from './DatePicker';
import ClassSelector from './ClassSelector';
import AttendanceTable from './AttendanceTable';
import './Attendance.css';
import { fetchUsersByLevelRange } from '@/redux/actions/userAction';


const AttendancePage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedClass, setSelectedClass] = useState('1');
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchAttendanceData();
  }, [selectedDate, selectedClass]);

  const fetchAttendanceData = async () => {
    try {
      const data = await fetchUsersByLevelRange(0,10);
      setStudents(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleClassChange = (cls) => {
    setSelectedClass(cls);
  };

  const handleCheckboxChange = async (studentId, status) => {
    try {
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="attendance-container">
      <h1 className="attendance-header">Student Attendance Management System</h1>
      <div className="datepicker-container">
        <DatePicker selectedDate={selectedDate} handleDateChange={handleDateChange} />
      </div>
      <div className="class-selector-container">
        <ClassSelector selectedClass={selectedClass} handleClassChange={handleClassChange} />
      </div>
      <AttendanceTable students={students} handleCheckboxChange={handleCheckboxChange} />
    </div>
  );
};

export default AttendancePage;
