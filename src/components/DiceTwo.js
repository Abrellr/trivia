import React from "react";

export default function DiceTwo(props) {
  return (
    <div>
      <img key={props.id} className="diceImg" src={props.image} alt="diceTwo" />
    </div>
  );
}
