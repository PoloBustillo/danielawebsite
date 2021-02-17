import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import marked from "marked";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<i class="fas fa-calendar-day"></i>;
import Fade from "react-reveal/Fade";
import { AwesomeButton } from "react-awesome-button";
import scrollDown from "public/scroll-down3.gif";
import Link from "next/link";
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
          maxHeight: "70vh",
        }}
      >
        <Card.Body
          style={{ padding: "0.8rem", maxHeight: "70vh", minHeight: "70vh" }}
        >
          <Card.Img
            style={{ height: "55.45%", width: "100%", minHeight: "270px" }}
            variant="bottom"
            src={props.terapia?.Contenido[0]?.Imagen.url}
          />
          <Card.Title
            style={{
              margin: "2vh 0",
              fontFamily: "Noto Sans",
              fontWeight: "900",
              color: "#4a5568",
            }}
          >
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
            <div
              style={{ textAlign: "center" }}
              dangerouslySetInnerHTML={{
                __html: marked(props.terapia?.Contenido[0]?.Descripcion),
              }}
            ></div>
          </div>
          <div
            style={{
              borderBottom: "1px solid #d8e3f2",
              margin: "3vh 0vw",
            }}
          ></div>
          <Row>
            <Col>
              <AwesomeButton
                button-primary-color={"#000"}
                button-raise-level={"5px"}
                size="medium"
                type="primary"
              >
                <span style={{ fontFamily: "Noto Sans" }}>
                  <FontAwesomeIcon fixedWidth size="sm" icon={faCalendarDay} />{" "}
                  Citas
                </span>
              </AwesomeButton>
            </Col>
            <Col>
              <Card.Link style={{ fontFamily: "Noto Sans", color: "#325c99" }}>
                <Link href={`/tratamiento/${props.terapia.id}`}>
                  Más Información
                </Link>
              </Card.Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Fade>
  );
};

CardService.propTypes = {};

export default CardService;
