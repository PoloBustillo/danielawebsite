import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `${src}`;
};

const CardService = (props) => {
  return (
    <Card
      style={{
        ...props.style,
        width: "75vw",
        margin: "10vh 0",
        backgroundColor: "transparent",
        color: "white",
        textAlign: "center",
      }}
    >
      <Card.Header>{props.terapia.terapiaCategoria}</Card.Header>
      <Card.Body>
        <Card.Title> {props.terapia?.tipoTerapia}</Card.Title>
        <Card.Img
          style={{ height: "50vmin", width: "70vmin" }}
          variant="bottom"
          src={props.terapia?.imagen}
        />
        <Card.Subtitle className="mb-2 text-muted">
          {props.terapia?.tipoTerapia}
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "center" }}>
          {props.terapia?.contenido}
        </Card.Text>
        <Card.Link href="#">Blog 1</Card.Link>
        <Card.Link href="#">Blog 2</Card.Link>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary">Haz tu cita!!!</Button>
      </Card.Footer>
    </Card>
  );
};

CardService.propTypes = {};

export default CardService;
