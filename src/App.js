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
import diceOne from "./data/diceOne.js";
import diceTwo from "./data/diceTwo.js";

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
var initDice = diceOne[5];

function App() {
  //set the initial state for landmark
  const [randomIndexLandmark, setRandomIndexLandmark] = useState(randLandmark);
  //set the initial state for dice image
  const [diceOneIndex, setDiceOneIndex] = useState(initDice);
  const [diceTwoIndex, setDiceTwoIndex] = useState(initDice);

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

  function nextDiceIndex() {
    setDiceOneIndex(diceOne[Math.floor(Math.random() * 6)]);
    setDiceTwoIndex(diceTwo[Math.floor(Math.random() * 6)]);
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
        <Route
          exact
          path="/playDice"
          render={(props) => (
            <PlayDiceCard
              key={initDice.id}
              diceOneIndex={diceOneIndex.image}
              diceTwoIndex={diceTwoIndex.image}
              nextDiceIndex={() => nextDiceIndex()}
              {...props}
            />
          )}
        />
        <Route path="/" component={HomeCard} />
      </Switch>
      <Footer />
    </Container>
  );
}

export default App;
