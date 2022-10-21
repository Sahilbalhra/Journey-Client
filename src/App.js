import Home from "./components/Home/Home";
import { Container } from "@mui/material";
import React from "react";
// import Navbar from "./components/Navbar/Navbar";
import NavBar from "./components/Navbar/Header"

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Auth from "./components/Auth/Auth";
import { gapi } from "gapi-script";
import PostDetails from "./components/PostDetails/PostDetails";

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'))

  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId: "434596397922-ko2re27n43bgletkccj5j1q8bi1l1h1e.apps.googleusercontent.com",
      plugin_name: "chat",
    });
  });

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <NavBar />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Navigate to="posts" replace />} />
          <Route path="/posts" element={<Home />} />
          <Route path="/posts/search" element={<Home />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          {/* <Route path="/auth" element={() => (!user ? <Auth /> : <Navigate to="/posts"/>)} /> */}
          <Route path={user ? "/posts" : "/auth"} element={<Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
