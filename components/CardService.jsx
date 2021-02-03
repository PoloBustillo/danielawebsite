import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import Corgi from "public/corgiParticles3.png";
import Image from "next/image";

const CardService = (props) => {
  return (
    <Card
      style={{
        width: "75vw",
        margin: "10vh 0",
        backgroundColor: "transparent",
        color: "white",
      }}
    >
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Img style={{ height: "300px" }} variant="bottom" src={Corgi} />
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          <Image src={Corgi} alt="Sigue hacia abajo" width={100} height={100} />
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary">Go somewhere</Button>
      </Card.Footer>
    </Card>
  );
};

CardService.propTypes = {};

export default CardService;
