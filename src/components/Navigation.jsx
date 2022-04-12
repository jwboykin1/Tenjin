import React from "react";
import { NavLink } from "react-router-dom";
import TenjinTech from "./TenjinTech-long.png";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-*">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={TenjinTech} height="90" width="180" />
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link no-logo" to="/Contact">
                  Contact
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link no-logo" to="/Coursework">
                  Coursework
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link no-logo" to="/About">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
