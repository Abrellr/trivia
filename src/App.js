import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Title from "./components/Title";
import HomeCard from "./components/HomeCard";
import "./App.css";

function App() {
  return (
    <Container>
      <Navigation />
      <Title />
      <HomeCard />
      <Footer />
    </Container>
  );
}

export default App;
