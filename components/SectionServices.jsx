import React, { useState } from "react";
import PropTypes from "prop-types";

import Fade from "react-reveal/Fade";
import Plx from "react-plx";
import CardService from "./CardService";
import { Row, Col } from "react-bootstrap";
import SubMenuServices from "./SubMenuServices";

const parallaxDataColor = [
  {
    start: "self",
    duration: 5000,
    properties: [
      {
        startValue: "#f7f8fc",
        endValue: "#FFFFFF",
        property: "backgroundColor",
      },
    ],
  },
];

const SectionServices = (props) => {
  return (
    <div id="sectionServices">
      <Fade top cascade ssrFadeout>
        <div className="services-header">
          <h1 className="section-title header">
            <div>Servicios</div>
            <div>Profesionales</div>
          </h1>
        </div>
      </Fade>
      <Row style={{ justifyContent: "center" }}>
        <Plx className="titleParallax" parallaxData={parallaxDataColor}>
          <Row
            style={{
              display: "flex",
              marginTop: "-45px",
              justifyContent: "center",
              color: "#007bff",
            }}
          >
            <SubMenuServices
              areas={props.areas}
              setFilter={props.setFilter}
            ></SubMenuServices>
          </Row>
          <Row className="row-cards">
            {props.terapias.map((terapia, index) => {
              return terapia.tipos_terapias?.map((tipo_terapia) => {
                return (
                  <Col
                    style={{
                      float: "none",
                      margin: "0 auto",
                    }}
                    xs={12}
                    md={6}
                    lg={6}
                  >
                    <CardService
                      key={tipo_terapia.id}
                      terapia={tipo_terapia}
                    ></CardService>
                  </Col>
                );
              });
            })}
          </Row>
        </Plx>
      </Row>
      <style jsx>{`
        #sectionServices {
          top: 10vh;
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

        .firstCard {
          margin-left: 12.5vw !important;
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

SectionServices.propTypes = {};

export default SectionServices;
