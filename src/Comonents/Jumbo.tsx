import React from "react";
import { Container, Button } from "react-bootstrap";

export default function Jumbo() {
  return (
    <Container fluid className="jumbo">
      <div className="jumbotext">
        <h1>Hello, world!</h1>
        <p>Welcome to some cool space articles. Prepare spacesuits!</p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </div>
    </Container>
  );
}
