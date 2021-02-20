import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import LightSpeed from "react-reveal/LightSpeed";
import Fade from "react-reveal/Fade";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Accordion, Card } from "react-bootstrap";

const SectionFAQ = (props) => {
  const [accordionSelected, setAccordionSelected] = useState();
  const [flag, setFlag] = useState();
  return (
    <div id="sectionFAQ">
      <Fade top cascade ssrFadeout>
        <div className="services-header">
          <h1 className="section-title header">
            <div>Preguntas</div>
            <div>Frecuentes</div>
          </h1>
        </div>
      </Fade>

      <Row style={{ justifyContent: "center" }}>
        <Col style={{ margin: "4vh 0" }} sm={{ span: 8 }} centered>
          <Accordion
            style={{
              background: "transparent",
            }}
            onSelect={(e) => {
              setAccordionSelected(e);
            }}
          >
            {props.preguntas.map((item, index) => {
              index = index + 1;
              return (
                <Card
                  style={{
                    background: "transparent",
                    border: "none",
                  }}
                >
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey={index}
                    style={{
                      background: "transparent",
                      border: "none",
                    }}
                  >
                    <span
                      className="mb-2"
                      style={{
                        color: "#0275d8",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      {item.Pregunta}
                      {accordionSelected === index ? (
                        <FontAwesomeIcon
                          fixedWidth
                          size="1x"
                          icon={faAngleUp}
                          style={{ float: "right" }}
                        />
                      ) : (
                        <FontAwesomeIcon
                          fixedWidth
                          size="1x"
                          icon={faAngleDown}
                          style={{ float: "right" }}
                        />
                      )}
                    </span>
                  </Accordion.Toggle>
                  <LightSpeed left cascade ssrFadeout>
                    <Accordion.Collapse
                      eventKey={index}
                      style={{
                        background: "transparent",
                        borderBottom: "1px solid rgba(0,0,0,.125)",
                      }}
                    >
                      <Card.Body>
                        <ReactMarkdown source={item.Respuesta} />
                      </Card.Body>
                    </Accordion.Collapse>
                  </LightSpeed>
                </Card>
              );
            })}
          </Accordion>
        </Col>
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

SectionFAQ.propTypes = {};

export default SectionFAQ;
