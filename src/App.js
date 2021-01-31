import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Title from "./components/Title";
import HomeCard from "./components/HomeCard";
import LandmarkCard from "./components/LandmarkCard";
import "./App.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Container fluid>
      <Navigation />
      <Title />
      <Switch>
        <Route path="/landmark" component={LandmarkCard} />
        <Route path="/" component={HomeCard} />
      </Switch>
      <Footer />
    </Container>
  );
}

export default App;
