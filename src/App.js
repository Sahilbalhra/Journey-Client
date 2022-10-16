import Home from "./components/Home/Home";
import { Container } from "@mui/material";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Auth from "./components/Auth/Auth";

const App = () => {

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
