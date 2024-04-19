import React, { useState } from 'react';
import '../CSS/Login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Role:', role);
    if (role === 'admin') {
      window.location.href = '/admin';
    } else {
      window.location.href = '/homepage';
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Select Role:</label>
          <div>
            <input
              type="radio"
              id="admin"
              value="admin"
              checked={role === 'admin'}
              onChange={() => setRole('admin')}
            />
            <label htmlFor="admin" className="radio-label">Admin</label>
          </div>
          <div>
            <input
              type="radio"
              id="user"
              value="user"
              checked={role === 'user'}
              onChange={() => setRole('user')}
            />
            <label htmlFor="user" className="radio-label">User</label>
          </div>
        </div>
        <button type="submit">Login</button>
        <div className="forgot-password">
          <span>Forgot Password?</span>
        </div>
      </form>
    </div>
  );
};

export default Login;
