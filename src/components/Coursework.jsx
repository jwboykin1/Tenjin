import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Coursework() {
    return (
        <div class="menu" >
            <h1>Courses</h1>
            <h2 class="courseHeader">Computer Basics</h2>
            <ul id="menu">
                <li><a href="http://10.128.0.3:8080/guacamole" target="_blank">Change Mouse Pointer Size</a></li>
            </ul>
            <h2 class="courseHeader">Security and Phishing Awareness</h2>
            <ul id="menu">
                <li><a href="Spotify">Phishing Real-World Examples</a></li>
            </ul>

        </div>
    );
}

export default Coursework;