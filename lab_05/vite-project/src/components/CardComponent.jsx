import React from "react";
import { Card } from "react-bootstrap";

const CardComponent = ({ news }) => {
  return (
    <Card style={{ width: "90%", margin: "10px", justifyContent: "center" }}>
      <Card.Img variant="top" src={news.image} />
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        <Card.Text>{news.description}</Card.Text>
        <a href="#">{news.title}</a>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
