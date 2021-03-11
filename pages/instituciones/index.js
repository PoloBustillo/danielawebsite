import React, { useState } from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import HeadShake from "react-reveal/HeadShake";
import Fade from "react-reveal/Fade";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Accordion, Card } from "react-bootstrap";

const Insituciones = (props) => {
  const [accordionSelected, setAccordionSelected] = useState();
  const [flag, setFlag] = useState();
  return (
    <div id="sectionFAQ">
      <Head>
        <title>Instituciones asociadas con Psicologo Daniela </title>
        <meta
          name="title"
          content="Instituciones asociadas con Psicologo Daniela"
        />
        <meta
          name="description"
          content="Instituciones asociadas con la piscologa Daniela Diaz, podras encontrar asociaciones con las que puedes acceder a descuentos"
        />
        <meta http-equiv="content-language" content="es" />
        <meta name="keywords" content={`{article.Nombre}`} />
        <meta name="author" content="Daniela Diaz Merino" />
        <link rel="shortcut icon" href="logonobg.png" />
      </Head>
      <div className="services-header">
        <h1 className="section-title header">
          <div>Instituciones</div>
        </h1>
      </div>

      <Row style={{ justifyContent: "center" }}>
        <Col
          style={{ margin: "4vh 0" }}
          sm={{ span: 8 }}
          centered={"true"}
        ></Col>
      </Row>
      <style jsx>{`
        .colfaq {
          margin: 4vh 0 !important;
        }
        #sectionFAQ {
          height: 100%;
          overflow: hidden;
          background-color: rgb(236, 240, 249);
          position: relative;
        }
        .services-header {
          font-family: muli, sans-serif !important;
          font-size: 6vh;
          font-weight: 600;
          padding: 10vmin;
          background-color: rgb(255, 255, 255);
          margin-bottom: 2vh;
        }
        .section-title {
          text-align: center;
          color: rgb(41, 47, 69);
          font-weight: 900;
          margin-block-end: 0;
          font-family: "Noto Sans";
        }
      `}</style>
    </div>
  );
};

Insituciones.propTypes = {};

export default Insituciones;
