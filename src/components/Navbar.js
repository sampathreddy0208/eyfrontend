import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'skyblue' }}>
      <div className="container">
        <Link className="navbar-brand" to="/" style={{ fontFamily: 'Lobster, cursive', fontSize: '2rem' }}>RecipeShare</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: 'darkblue' }}>Home</Link>
            </li>
            {isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile" style={{ color: 'darkblue' }}>Profile</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact-us" style={{ color: 'darkblue' }}>Contact Us</Link>
                </li>
              </>
            )}
            {!isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login" style={{ color: 'darkblue' }}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register" style={{ color: 'darkblue' }}>Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
