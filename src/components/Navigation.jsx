import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./LogoutButton";



function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Tenjin Tech
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">
                  Contact
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Coursework">
                  CourseworkBeta
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  About
                </NavLink>
              </li>
              <li>{ <LogoutButton/> }</li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default Navigation;
