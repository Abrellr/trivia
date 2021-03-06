import React, { useState } from "react";
import { Container, Button, Row } from "react-bootstrap";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Title from "./components/Title";
import HomeCard from "./components/HomeCard";
import LandmarkCard from "./components/LandmarkCard";
import PlayDiceCard from "./components/PlayDiceCard";
import "./App.css";
import landmarks from "./data/landmarks.js";
import { Switch, Route } from "react-router-dom";

//randomize the first image after clicking play
var randLandmark = landmarks[Math.floor(Math.random() * landmarks.length) + 1];

//the fisher yates algorithm that will be triggered after clicking next button
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

//set the initial dice index
//var initDice = diceOne[5];

function App() {
  //set the initial state for landmark
  const [randomIndexLandmark, setRandomIndexLandmark] = useState(randLandmark);

  function nextLandmarkIndex() {
    //onClick will loop through the shuffled array and pass the index
    let newShuffledArray = shuffleArray(landmarks);
    if (newShuffledArray) {
      let i = 0;
      for (; i < newShuffledArray.length; i++) {
        setRandomIndexLandmark(newShuffledArray[i]);
      }
    }
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
          {/* <LandmarkAnswer
            key={randomIndexLandmark.id}
            name={randomIndexLandmark.name}
            location={randomIndexLandmark.location}
          /> */}
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
        <Route exact path="/playDice" component={PlayDiceCard} />
        <Route path="/" component={HomeCard} />
      </Switch>
      <Footer />
    </Container>
  );
}

export default App;
