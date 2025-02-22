import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Registration successful!");
      window.location.href = "/login";
    } else {
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Register</h1>
      <form onSubmit={handleSubmit} className="mt-4 border p-4 rounded bg-light" style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div className="mb-3">
          <label className="form-label">Username:</label>
          <input
            type="text"
            className="form-control"
            style={{ width: '100%' }} // Adjusted width to fill container
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            style={{ width: '100%' }} // Adjusted width to fill container
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            style={{ width: '100%' }} // Adjusted width to fill container
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            style={{ width: '100%' }} // Adjusted width to fill container
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={formData.password !== formData.confirmPassword}>Register</button>
        <Link to="/login" className="d-block mt-3 text-center">Already have an account? Login here</Link>
      </form>
    </div>
  );
};

export default Register;
