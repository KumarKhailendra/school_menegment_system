import { useState, useEffect } from 'react';
import axios from 'axios';

const StaffSalary = () => {
    const [salaryInfo, setSalaryInfo] = useState(null);
    const staffId = 'staff_id';

    useEffect(() => {
        const fetchSalary = async () => {
            try {
                const response = await axios.get(`/api/staff/${staffId}/salary`);
                setSalaryInfo(response.data);
            } catch (error) {
                console.error('Error fetching salary information:', error);
            }
        };
        fetchSalary();
    }, []);

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
