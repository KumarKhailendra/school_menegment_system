"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./salary.css";
import { useAppDispatch } from "@/redux/hooks";
import { fetchUsersByLevelRange } from "@/redux/actions/userAction";

const AdminSalary = () => {
  const [salaries, setSalaries] = useState([]);
  const [newSalary, setNewSalary] = useState({ staffId: "", amount: 0 });
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedSalaryId, setSelectedSalaryId] = useState(null);
  const [userData, setUserData] = useState([]);
  const dispatch = useAppDispatch();

  async function fetchUserData() {
    try {
      const data = await fetchUsersByLevelRange(11, 50);
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  useEffect(() => {
    fetchUserData();
  }, [dispatch]);

  useEffect(() => {
    const fetchSalaries = async () => {
      try {
        const response = await axios.get("/api/user/staff/salary/all");
        setSalaries(response.data.SalarysRecord);
      } catch (error) {
        console.error("Error fetching salaries:", error);
      }
    };
    fetchSalaries();
  }, []);

  const handleInputChange = (e) => {
    setNewSalary({ ...newSalary, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isUpdating) {
        await axios.put(`/api/user/staff/salary/${selectedSalaryId}`, newSalary);
      } else {
        await axios.post(`/api/user/staff/${newSalary.staffId}/salary`, newSalary);
      }
      const response = await axios.get("/api/user/staff/salary/all");
      setSalaries(response.data.SalarysRecord);
      setNewSalary({ staffId: "", amount: 0 });
      setIsUpdating(false);
      setSelectedSalaryId(null);
    } catch (error) {
      console.error("Error adding/updating salary:", error);
    }
  };

  const handleEdit = (salary) => {
    setNewSalary({ staffId: salary.staffId, amount: salary.amount });
    setSelectedSalaryId(salary._id);
    setIsUpdating(true);
  };

  return (
    <div className="admin-salary-container">
      <div className="salary-form-container">
        <h2>Add or Update Salary</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label className="input-label">Staff ID:</label>
            <select
              name="staffId"
              value={newSalary.staffId}
              onChange={handleInputChange}
              className="input-field"
              required
            >
              <option value="">Select Staff ID</option>
              {userData?.map((staff, index) => (
                <option value={staff._id} key={index}>
                  Staff ID {staff._id}
                </option>
              ))}
            </select>
          </div>

          <div className="input-container">
            <label className="input-label">
              Amount:
              <input
                type="number"
                name="amount"
                value={newSalary.amount}
                onChange={handleInputChange}
                className="input-field"
                required
              />
            </label>
          </div>
          <button type="submit" className="submit-button">
            {isUpdating ? "Update Salary" : "Add Salary"}
          </button>
        </form>
      </div>

      <div className="salary-list-container">
        <h2>Salary List</h2>
        <table>
          <thead>
            <tr>
              <th>Staff ID</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {salaries?.map((salary) => (
              <tr key={salary._id}>
                <td>{salary.staffId}</td>
                <td>{salary.amount}</td>
                <td>{new Date(salary.date).toLocaleDateString()}</td>
                <td>
                  <button
                    onClick={() => handleEdit(salary)}
                    className="edit-button"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminSalary;
