import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => (
  <nav className="navbar">
    <h1 className="navbar-title">My Story Space</h1>
    <ul className="navbar-links">
      <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
      <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
      <li><NavLink to="/stories" activeClassName="active">Stories</NavLink></li>
      
    </ul>
  </nav>
);

export default Navbar;
