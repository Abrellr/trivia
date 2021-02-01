import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Title from "./components/Title";
import HomeCard from "./components/HomeCard";
import LandmarkCard from "./components/LandmarkCard";
import "./App.css";
import landmarks from "./data/landmarks.js";
import { Switch, Route } from "react-router-dom";

function App() {
  const [state, setState] = useState(landmarks[0]);

  function next() {
    setState(landmarks[Math.floor(Math.random() * landmarks.length)]);
  }

  return (
    <Container fluid>
      <Navigation />
      <Title />
      <Switch>
        <Route exact path="/landmark">
          <LandmarkCard key={state.id} name={state.name} image={state.image} />
          <Button
            onClick={() => {
              next();
            }}
          >
            Next
          </Button>
          );)
        </Route>
        <Route path="/" component={HomeCard} />
      </Switch>
      <Footer />
    </Container>
  );
}

export default App;
