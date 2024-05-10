import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Attendance.css';


const DatePickerComponent = ({ selectedDate, handleDateChange }) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={date => handleDateChange(date)}
      dateFormat="MM/dd/yyyy"
      className="date-picker"
    />
  );
};

export default DatePickerComponent;
