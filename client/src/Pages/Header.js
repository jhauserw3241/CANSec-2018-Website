import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../Images/logo.svg';
import './../CSS/Header.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="Navbar">
          <div className="Header-logo">
            <img src={logo} className="Logo-img" alt="logo" />
          </div>
          <div className="nav-body">
            <NavLink to="/home" className="nav-link">Home</NavLink>
            <NavLink to="/callforparticipation" className="nav-link">Call for Participation</NavLink>
            <NavLink to="/conference" className="nav-link">Conference</NavLink>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
