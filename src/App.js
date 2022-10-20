import Home from "./components/Home/Home";
import { Container } from "@mui/material";
import React from "react";
// import Navbar from "./components/Navbar/Navbar";
import NavBar from "./components/Navbar/Header"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Auth from "./components/Auth/Auth";
import { gapi } from "gapi-script";

const App = () => {
  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId: "434596397922-ko2re27n43bgletkccj5j1q8bi1l1h1e.apps.googleusercontent.com",
      plugin_name: "chat",
    });
  });

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <NavBar />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
