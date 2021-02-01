import React from "react";
import { Row, Container } from "react-bootstrap";
import "../App.css";

export default function Title() {
  return (
    <Container>
      <Row>
        <svg className="text" viewBox="0 0 600 300">
          <text
            id="shiny"
            textAnchor="middle"
            x="50%"
            y="50%"
            dy=".35em"
            className="text"
            fill="url(#gr-simple)"
          >
            Trivia Wars
          </text>
          <linearGradient
            id="gr-simple"
            className="shiny"
            x1="0"
            y1="0"
            x2="100%"
            y2="100%"
          >
            <stop stopColor="hsl(50, 100%, 70%)" offset="10%" />
            <stop stopColor="hsl(320, 100%, 50%)" offset="90%" />
          </linearGradient>
        </svg>
      </Row>
    </Container>
  );
}
