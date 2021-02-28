import React from "react";

export default function DiceTwo(props) {
  return (
    <div>
      <h3 className="player">Player Two</h3>
      <img key={props.id} className="diceImg" src={props.image} alt="diceTwo" />
    </div>
  );
}
