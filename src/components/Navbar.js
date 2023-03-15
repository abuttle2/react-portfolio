import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Alex Buttle</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="ml-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="about" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="contact" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;