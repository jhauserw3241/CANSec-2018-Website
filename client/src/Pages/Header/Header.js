import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './../../CSS/Header.css';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg  navbar-dark Header">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Home
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <NavLink className="dropdown-item" to="/home">Home</NavLink>
                <NavLink className="dropdown-item" to="/home/archive">Archive</NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Call For Participation
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <NavLink className="dropdown-item" to="/callforparticipation">Call For Participation</NavLink>
                <NavLink className="dropdown-item" to="/callforparticipation/submission">Submission</NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Conference
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <NavLink className="dropdown-item" to="/conference/program">Program</NavLink>
                <NavLink className="dropdown-item" to="/conference/keynotes">Keynotes</NavLink>
                <NavLink className="dropdown-item" to="/conference/invitedtalks">Invited Talks</NavLink>
              </div>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/competition">Competition</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Logistics
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <NavLink className="dropdown-item" to="/logistics">Basic info</NavLink>
                <NavLink className="dropdown-item" to="/logistics/registration">Registration</NavLink>
                <NavLink className="dropdown-item" to="/logistics/posterinstructions">Poster Instructions</NavLink>
                <NavLink className="dropdown-item" to="/logistics/studenttravelgrant">Student Travel Grant</NavLink>
              </div>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contactus">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
