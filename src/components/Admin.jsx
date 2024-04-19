import React from 'react';
import Navbar from './Navbar';
import profiles from './UsersInfo'; 
import '../CSS/Admin.css';

const Admin = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Location</th>
              <th>Role</th>
              <th>Bio</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((profile, index) => (
              <tr key={profile.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                <td>{profile.id}</td>
                <td>{profile.name}</td>
                <td>{profile.age}</td>
                <td>{profile.location}</td>
                <td>{profile.role}</td>
                <td>{profile.bio}</td>
                <td>
                  <div className="button-row">
                    <button className="action-button">Add</button>
                    <button className="action-button">Edit</button>
                    <button className="action-button">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
