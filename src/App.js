import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Title from "./components/Title";
import HomeCard from "./components/HomeCard";
import LandmarkCard from "./components/LandmarkCard";
import "./App.css";
import landmarks from "./data/landmarks.js";
import { Switch, Route } from "react-router-dom";

function App() {
  var randLandmark = landmarks[Math.floor(Math.random() * landmarks.length)];
  console.log(randLandmark);

  const [nextLandmark, setNextLandmark] = useState();

  // function next() {
  //   setNextLandmark(Math.floor(Math.random() * landmarks.length));
  // }

  return (
    <Container fluid>
      <Navigation />
      <Title />
      <Switch>
        <Route exact path="/landmark">
          <LandmarkCard
            key={randLandmark.id}
            name={randLandmark.name}
            image={randLandmark.image}
            //nextLandmark={nextLandmark()}
          />
          );)
        </Route>
        <Route path="/" component={HomeCard} />
      </Switch>
      <Footer />
    </Container>
  );
}

export default App;
