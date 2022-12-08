import React from "react";
import { Articles } from "../types";
import { Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface ArticleProps {
  art: Articles;
}

export default function Article({ art }: ArticleProps) {
  const navigate = useNavigate();
  return (
    <Col xs={3}>
      <Card>
        <Card.Img variant="top" src={art.imageUrl} />
        <Card.Body>
          <Card.Title>{art.title}</Card.Title>
          <Card.Text>{art.summary}</Card.Text>
          <Button variant="info" onClick={() => navigate(`/details/${art.id}`)}>
            Details
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
