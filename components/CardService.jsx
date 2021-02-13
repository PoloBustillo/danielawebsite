import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import marked from "marked";

import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `${src}`;
};

const CardService = (props) => {
  return (
    <Card
      style={{
        ...props.style,
        margin: "3vh 0",
        backgroundColor: "white",
        color: "rgb(41, 47, 69)",
        textAlign: "center",
        border: "none",
        backdropFilter: "blur(92px)",
        boxShadow: "0 0 30px #bfbfbf",
      }}
    >
      <Card.Body>
        <Card.Title> {props.terapia?.Nombre}</Card.Title>
        <Card.Img
          style={{ height: "55.45%", width: "100%" }}
          variant="bottom"
          src={props.terapia?.Contenido[0]?.Imagen.url}
        />
        <Card.Subtitle className="mb-2 text-muted">
          {props.terapia?.Nombre}
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "center" }}>
          <div
            style={{ textAlign: "justify" }}
            dangerouslySetInnerHTML={{
              __html: marked(props.terapia?.Contenido[0]?.Descripcion),
            }}
          ></div>
        </Card.Text>
        <Card.Link href="#">Blog 1</Card.Link>
        <Card.Link href="#">Blog 2</Card.Link>
        <Button variant="primary">Haz tu cita!!!</Button>
      </Card.Body>
    </Card>
  );
};

CardService.propTypes = {};

export default CardService;
