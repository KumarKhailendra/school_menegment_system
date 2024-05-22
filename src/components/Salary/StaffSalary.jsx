"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAppSelector } from '@/redux/hooks';

const StaffSalary = () => {
  const [salaryInfo, setSalaryInfo] = useState(null);
  const { auth } = useAppSelector(state => state);

  useEffect(() => {
    if (!auth.user?._id) {
      console.error('User ID is undefined');
      return;
    }

    const fetchSalary = async () => {
      try {
        const response = await axios.get(`/api/user/staff/${auth.user._id}/salary`);
        setSalaryInfo(response.data.SalarysRecord);
      } catch (error) {
        console.error('Error fetching salary information:', error);
      }
    };
    fetchSalary();
  }, [auth.user]);

  return (
    <div>
      <h1>Your Salary Information</h1>
      {salaryInfo ? (
        <div>
          <p>Amount: {salaryInfo.amount}</p>
          <p>Date: {new Date(salaryInfo.date).toLocaleDateString()}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default StaffSalary;
