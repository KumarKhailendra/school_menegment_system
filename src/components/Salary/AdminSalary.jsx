import { useState, useEffect } from 'react';
import axios from 'axios';

const AdminSalary = () => {
    const [salaries, setSalaries] = useState([]);
    const [newSalary, setNewSalary] = useState({ staffId: '', amount: 0 });
    const [isUpdating, setIsUpdating] = useState(false);
    const [selectedSalaryId, setSelectedSalaryId] = useState(null);

    useEffect(() => {
        const fetchSalaries = async () => {
            try {
                const response = await axios.get('/api/salary/all');
                setSalaries(response.data);
            } catch (error) {
                console.error('Error fetching salaries:', error);
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
                await axios.put(`/api/salary/${selectedSalaryId}`, newSalary);
            } else {
                await axios.post(`/api/staff/${newSalary.staffId}/salary`, newSalary);
            }
            const response = await axios.get('/api/salary/all');
            setSalaries(response.data);
            setNewSalary({ staffId: '', amount: 0 });
            setIsUpdating(false);
            setSelectedSalaryId(null);
        } catch (error) {
            console.error('Error adding/updating salary:', error);
        }
    };

    const handleEdit = (salary) => {
        setNewSalary({ staffId: salary.staffId, amount: salary.amount });
        setSelectedSalaryId(salary._id);
        setIsUpdating(true);
    };

    return (
        <div>
            <h1>Admin Panel - Manage Staff Salaries</h1>

            <h2>Add or Update Salary</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Staff ID:
                    <input
                        type="text"
                        name="staffId"
                        value={newSalary.staffId}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Amount:
                    <input
                        type="number"
                        name="amount"
                        value={newSalary.amount}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <button type="submit">{isUpdating ? 'Update Salary' : 'Add Salary'}</button>
            </form>

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
                    {salaries.map(salary => (
                        <tr key={salary._id}>
                            <td>{salary.staffId}</td>
                            <td>{salary.amount}</td>
                            <td>{new Date(salary.date).toLocaleDateString()}</td>
                            <td>
                                <button onClick={() => handleEdit(salary)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminSalary;
