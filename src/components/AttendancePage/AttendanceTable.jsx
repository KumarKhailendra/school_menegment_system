"use client";
import React from "react";
import "./Attendance.css";
import { useAppSelector } from "@/redux/hooks";

const AttendanceTable = ({ students, handleCheckboxChange, selectedDate }) => {
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
        {students?.map((student, index) => (
          <TableRow key={student._id} student={student} index={index} selectedDate={selectedDate} handleCheckboxChange={handleCheckboxChange} />
        ))}
      </tbody>
    </table>
  );
};

function TableRow({ student, index, selectedDate, handleCheckboxChange }) {
  const { auth } = useAppSelector(state => state)

  const handleStudaentData = () => {
    const stObj = {
      studentId: student._id,
      date: selectedDate,
      status: student.attendanceStatus === "present" ? "absent" : "present",
    }
    handleCheckboxChange(stObj, index)
  };

  return (
    <tr key={student?._id}>
      <td>
        {student?.fname} {student?.lname}
      </td>
      <td>{student?.standard}</td>
      <td>{student?.attendanceStatus}</td>
      <td>{student?.attendanceDate? new Date(student?.attendanceDate).toLocaleDateString(): "---"}</td>
      <td>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={student.attendanceStatus === "present"}
            onChange={() =>
              handleStudaentData()
            }
            disabled={auth?.user?.level < 50? true: false}
          />
          <span className="checkbox-custom"></span>
        </label>
      </td>
    </tr>
  );
}

export default AttendanceTable;
