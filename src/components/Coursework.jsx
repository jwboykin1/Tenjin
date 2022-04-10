import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Coursework() {
    return (
        <div>
            <h1>Courses</h1>
            <h2 class="courseHeader">Computer Basics</h2>
            <ul id="menu">
                <li><a href="Tunnel.html">Change Mouse Pointer Size</a></li>
            </ul>
            <h2 class="courseHeader">Security and Phishing Awareness</h2>
            <ul id="menu">
                <li><a href="Spotify">Phishing Real-World Examples</a></li>
            </ul>
            <Link
                to={{
                    pathname:'./Spotify'
                }}>
                My Spotify
            </Link>
            <NavLink className="nav-link" to="Spotify">
                About
            </NavLink>
        </div>
    );
}

export default Coursework;