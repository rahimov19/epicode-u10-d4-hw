import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Jumbo from "./Comonents/Jumbo";
import Main from "./Comonents/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import Details from "./Comonents/Details";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Jumbo />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
