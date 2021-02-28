import React from "react";

export default function DiceOne(props) {
  //set the initial state for dice image

  return (
    <div>
      <img key={props.id} className="diceImg" src={props.image} alt="diceOne" />
    </div>
  );
}
