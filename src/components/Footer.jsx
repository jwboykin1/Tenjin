import React from "react";
import {useLocation} from "react-router-dom";

function Footer() {
    const { pathname } = useLocation();
  return (
    <div className="footer">
      <footer class="py-5 bg-dark fixed-bottom" style={{ position: pathname === '/Spotify' ? 'static' : 'fixed' }}>
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; Tenjin Tech 2022
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
