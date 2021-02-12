import React, { useState } from "react";
import PropTypes from "prop-types";
import Jump from "react-reveal/Jump";
import Fade from "react-reveal/Fade";
import Plx from "react-plx";
import CardService from "./CardService";
import { Row, Col } from "react-bootstrap";

const parallaxDataColor = [
  {
    start: "self",
    duration: 5000,
    properties: [
      {
        startValue: "#EAEFF9",
        endValue: "#FFFFFF",
        property: "backgroundColor",
      },
    ],
  },
];
const parallaxModeFromLeft = [
  {
    start: "self",
    duration: 500,

    properties: [
      {
        startValue: -150,
        endValue: 12.5,
        unit: "vw",
        property: "translateX",
      },
    ],
  },
];
const parallaxModeFromRight = [
  {
    start: "self",
    duration: 500,
    unit: "vh",
    properties: [
      {
        startValue: 150,
        endValue: 12.5,
        unit: "vw",
        property: "translateX",
      },
    ],
  },
];

const SectionServices = (props) => {
  console.log(props);
  return (
    <Plx className="titleParallax" parallaxData={parallaxDataColor}>
      <div id="sectionServices">
        <Fade top cascade ssrFadeout>
          <div className="services-header">
            <h1 className="section-title header">
              <div>Servicios</div>
              <div>Profesionales</div>
            </h1>
          </div>
        </Fade>
        <Row style={{ justifyContent: "center", backgroundColor: "white" }}>
          <Row>
            <Jump top cascade ssrFadeout>
              <div className="subMenuServicios">
                <div
                  onClick={() => {
                    props.setFilter("");
                  }}
                  className="headerAnimation subMenu"
                >
                  Todos
                </div>
                {props.areas.map((terapia, index) => {
                  return (
                    <div
                      onClick={() => {
                        props.setFilter(terapia);
                      }}
                      className="headerAnimation subMenu"
                    >
                      {terapia}
                    </div>
                  );
                })}
              </div>
            </Jump>
          </Row>
          <Row>
            {props.terapias.map((terapia, index) => {
              console.log(terapia);
              return terapia.tipos_terapias?.map((tipo_terapia) => {
                return (
                  <Col xs={12} md={6} lg={4}>
                    <CardService
                      key={tipo_terapia.id}
                      terapia={tipo_terapia}
                    ></CardService>
                  </Col>
                );
              });
            })}
          </Row>
        </Row>
        <style jsx>{`
          #sectionServices {
            top: 10vh;
            height: 100%;
            overflow: hidden;
            position: relative;
          }
          .services-header {
            padding: 10vmin;
            background-color: rgb(236, 240, 249);
          }
          .subMenuServicios {
            display: flex;
            justify-content: center;
            margin-top: 4vh;
            text-align: center;
          }
          .subMenu {
            margin-right: 5vw;
            margin-left: 5vw;
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
    </Plx>
  );
};

SectionServices.propTypes = {};

export default SectionServices;
