"use client";

import React, { useState, useEffect } from 'react';
import DatePicker from './DatePicker';
import ClassSelector from './ClassSelector';
import AttendanceTable from './AttendanceTable';
import './Attendance.css';
import { UpdateStudentAttendance, fetchStudentAttendance, fetchUsersByLevelRange } from '@/redux/actions/userAction';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';


const AttendancePage = () => {
  const attendance = useAppSelector(state => state.user.st_attendance)
  const [selectedDate, setSelectedDate] = useState(convert(new Date()));
  const [selectedClass, setSelectedClass] = useState('1');
  const [students, setStudents] = useState([]);

  const dispatch = useAppDispatch()

  useEffect(() => {
      dispatch(fetchStudentAttendance(selectedClass, selectedDate));
  }, [dispatch, selectedClass, selectedDate]);

  useEffect(() => {
      setStudents(attendance? attendance : [])
  }, [dispatch, attendance,]);

  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleClassChange = (cls) => {
    setSelectedClass(cls);
  };

  const handleCheckboxChange = async (data) => {
    dispatch(UpdateStudentAttendance(data, selectedClass, selectedDate));
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
      <AttendanceTable students={students} handleCheckboxChange={handleCheckboxChange} selectedDate={selectedDate} />
    </div>
  );
};

export default AttendancePage;
