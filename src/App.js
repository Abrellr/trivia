import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "./components/Navigation";
import Title from "./components/Title";
import "./App.css";

function App() {
  return (
    <Container>
      <Navigation />
      <Title />
    </Container>
  );
}

export default App;
