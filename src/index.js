import React from "react";
import ReactDOM from "react-dom";
import {Auth0Provider, useAuth0} from "@auth0/auth0-react";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Contact,
  Coursework,
    Spotify,
    LogoutButton
} from "./components";


ReactDOM.render(
  <Router>

    <Navigation>
        <Auth0Provider
            domain="dev-34mse0jw.us.auth0.com"
            clientId="gqgq4gwioRY5eNCkmhaJLv8Hkj1Bma2F"
            redirectUri={window.location.origin}
        >
            <React.StrictMode>
                <home/>
            </React.StrictMode>
        </Auth0Provider>
    </Navigation>
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Coursework" element={<Coursework />} />
        <Route path="LogoutButton" element={<LogoutButton />}/>
    </Routes>
      <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
