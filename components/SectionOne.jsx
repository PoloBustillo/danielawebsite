import React, { useState } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import LazyHero from "react-lazy-hero";
import Image from "next/image";
import scrollDown from "public/scroll-down3.gif";
import "react-calendar/dist/Calendar.css";

const SectionOne = (props) => {
  const [value, onChange] = useState(new Date());
  return (
    <LazyHero
      style={{ position: "unset", width: "100vw" }}
      parallaxOffset={200}
      color="#000"
      opacity={0.4}
      transitionDuration={1000}
      isCentered={true}
      minHeight={"75vh"}
      imageSrc="/heroImage.jpg"
    >
      <Row className="sectionButtonsContainer">
        <Col className="heroButtonContainer">
          <Button className="buttonHero element-animation">CITAS</Button>
        </Col>
        <Col className="heroButtonContainer">
          <Button className="buttonHero element-animation">MATERIAL</Button>
        </Col>
        <Col className="heroButtonContainer">
          <Button className="buttonHero element-animation">SERVICIOS</Button>
        </Col>
      </Row>
      <div
        style={{
          position: "absolute",
          top: "40vh",
        }}
      >
        <h5 style={{ color: "white", letterSpacing: "3px" }}>
          UNA VIDA LLENA DE SALUD EMPIEZA CON UNA MENTE SALUDABLE.
        </h5>
        <h1 className="title border-button" style={{ color: "white" }}>
          Psic. Daniela Diaz Merino
        </h1>
        <h6 style={{ color: "white" }}>Puebla, Pue.</h6>
      </div>
      <div
        className="gifContainer"
        style={{ top: "42vh", position: "relative" }}
      >
        <Image
          src={scrollDown}
          alt="Sigue hacia abajo"
          width={100}
          height={100}
        />
      </div>
      <style jsx>{`
        .sectionButtonsContainer {
          width: 70vw !important;
        }
      `}</style>
    </LazyHero>
  );
};

SectionOne.propTypes = {};

export default SectionOne;
