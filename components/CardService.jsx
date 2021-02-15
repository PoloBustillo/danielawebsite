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
          <Card.Title style={{ margin: "2vh 0" }}>
            {" "}
            {props.terapia?.Nombre}
          </Card.Title>
          <div
            style={{
              textAlign: "center",
              fontFamily: "source-sans-pro, sans-serif",
              fontWeight: "300",
              fontStyle: "normal",
              width: "80%",
              marginLeft: "10%",
              marginTop: "2vh",
              marginBottom: "2vh",
            }}
          >
            <p
              style={{ textAlign: "center" }}
              dangerouslySetInnerHTML={{
                __html: marked(props.terapia?.Contenido[0]?.Descripcion),
              }}
            ></p>
          </div>
          <div
            style={{ borderBottom: "1px solid gray", margin: "3vh 10vw" }}
          ></div>
          <Row>
            <Col>
              <Button variant="info">Haz tu cita</Button>
            </Col>
            <Col>
              <Card.Link href="#">Más Información</Card.Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Fade>
  );
};

CardService.propTypes = {};

export default CardService;
