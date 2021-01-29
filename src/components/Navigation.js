import React from "react";
import { Nav, Row, Col } from "react-bootstrap";

export default function Navigation() {
  return (
    <Row>
      <Col>
        <Nav>
          <Nav.Item>
            <Nav.Link href="/home">HOME</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
    </Row>
  );
}
