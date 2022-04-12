import React from "react";
import {useLocation} from "react-router-dom";



function Footer(){
    const { pathname } = useLocation();
    return(
  <footer className="footer" style={{ position: pathname === '/Spotify' ? 'static' : 'fixed', height: pathname === '/Spotify' ? '43px' : 'auto'}}>
    <p>Copyright @ Tenjin Tech 2022</p>
  </footer>
);
}

export default Footer;
