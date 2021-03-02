import React, { useState } from "react";

import { Row, Col } from "react-bootstrap";

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

const SectionCitas = (props) => {
  return (
    <div id="sectionServices" style={{ justifyContent: "center" }}>
      <div className="services-header">
        <h1 className="section-title header">
          <div>Haz tu Cita</div>
          <div>Facil y sencillo</div>
        </h1>
      </div>

      <Row style={{ justifyContent: "center" }}>
        <Row
          style={{
            display: "flex",
            marginTop: "-45px",
            justifyContent: "center",
            color: "#007bff",
          }}
        ></Row>
        <Row className="row-cards"></Row>
      </Row>
      <style jsx>{`
        #sectionServices {
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

SectionCitas.propTypes = {};

export default SectionCitas;
