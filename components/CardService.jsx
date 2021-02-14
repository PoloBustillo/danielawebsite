import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import marked from "marked";
import Fade from "react-reveal/Fade";

const myLoader = ({ src, width, quality }) => {
  return `${src}`;
};

const CardService = (props) => {
  return (
    <Fade bottom ssrFadeout>
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
        <Card.Body style={{ padding: "0.6rem" }}>
          <Card.Img
            style={{ height: "55.45%", width: "100%", minHeight: "270px" }}
            variant="bottom"
            src={props.terapia?.Contenido[0]?.Imagen.url}
          />
          <Card.Title> {props.terapia?.Nombre}</Card.Title>
          <Card.Text
            style={{
              textAlign: "center",
              fontFamily: "source-sans-pro, sans-serif",
              fontWeight: "300",
              fontStyle: "normal",
              width: "80%",
              marginLeft: "10%",
            }}
          >
            <p
              style={{ textAlign: "center" }}
              dangerouslySetInnerHTML={{
                __html: marked(props.terapia?.Contenido[0]?.Descripcion),
              }}
            ></p>
          </Card.Text>
          <Button variant="primary">Haz tu cita</Button>
          <Card.Link href="#">Más Información</Card.Link>
        </Card.Body>
      </Card>
    </Fade>
  );
};

CardService.propTypes = {};

export default CardService;
