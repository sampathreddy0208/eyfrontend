import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Accept any credentials for demo purposes
    localStorage.setItem("username", email);
    setIsLoggedIn(true);
    window.location.href = "/home";
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Login</h1>
      <form onSubmit={handleSubmit} className="mt-4 border p-4 rounded bg-light" style={{ maxWidth: '400px', margin: '0 auto' }}>
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
        <button type="submit" className="btn btn-primary">Login</button>
        <Link to="/register" className="d-block mt-3 text-center">Don't have an account? Register here</Link>
      </form>
    </div>
  );
};

export default Login;
