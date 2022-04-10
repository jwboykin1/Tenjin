import React from "react";
import ReactDOM from "react-dom";
//import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Contact,
  Coursework,
    Spotify
} from "./components";

ReactDOM.render(
  <Router>

    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Coursework" element={<Coursework />} />
        <Route path="/Spotify" element={<Spotify />} />
    </Routes>
      <Footer />
  </Router>,
    /*<Auth0Provider
        domain="dev-34mse0jw.us.auth0.com"
        clientId="gqgq4gwioRY5eNCkmhaJLv8Hkj1Bma2F"
        redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>,*/
  document.getElementById("root")
);

serviceWorker.unregister();
