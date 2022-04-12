import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Coursework() {
    return (
        <div class="menu" >
            <h1>Courses</h1>
            <h2 class="courseHeader">Computer Basics</h2>
            <ul id="menu">
                <a href="http://10.128.0.3:8080/guacamole" target="_blank"><li>Change Mouse Pointer Size</li></a>
            </ul>
            <h2 class="courseHeader">Security and Phishing Awareness</h2>
            <ul id="menu">
                <a href="Spotify"><li>Phishing Real-World Examples</li></a>
            </ul>

        </div>
    );
}

export default Coursework;