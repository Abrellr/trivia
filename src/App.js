import React, { useState } from "react";
import { Container, Button, Row } from "react-bootstrap";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Title from "./components/Title";
import HomeCard from "./components/HomeCard";
import LandmarkCard from "./components/LandmarkCard";
import "./App.css";
import landmarks from "./data/landmarks.js";
import { Switch, Route } from "react-router-dom";

var randLandmark = landmarks[Math.floor(Math.random() * landmarks.length)];
function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function App() {
  const [randomIndexLandmark, setRandomIndexLandmark] = useState(randLandmark);
  const newShuffledArray = shuffleArray(landmarks);

  function nextLandmarkIndex() {
    setRandomIndexLandmark(
      newShuffledArray[Math.floor(Math.random() * newShuffledArray.length)]
    );
  }

  return (
    <Container fluid>
      <Navigation />
      <Title />
      <Switch>
        <Route exact path="/landmark">
          <LandmarkCard
            key={randomIndexLandmark.id}
            image={randomIndexLandmark.image}
            name={randomIndexLandmark.name}
          />
          <Row className="btnRow">
            <Button
              id="nextBtn"
              onClick={() => {
                nextLandmarkIndex();
              }}
            >
              Next
            </Button>
          </Row>
        </Route>
        <Route path="/" component={HomeCard} />
      </Switch>
      <Footer />
    </Container>
  );
}

export default App;
