import React from 'react';
import './styles.css'; // Import CSS file for styling

const UserDataTable = ({ userData }) => {
  console.log("userData>>>>>>>>>>>>",userData);

  return (
    <div className="table-container">
      <table className="responsive-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Level</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {userData?.map(user => (
            <tr key={user._id}>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>{user.level}</td>
              <td>{new Date(user.createdAt).toLocaleString()}</td>
              <td>{new Date(user.updatedAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDataTable;
