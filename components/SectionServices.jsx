import React from "react";
import PropTypes from "prop-types";
import Tilt from "react-parallax-tilt";

import Plx from "react-plx";
import CardService from "./CardService";

const parallaxDataColor = [
  {
    start: "self",
    duration: 5000,
    properties: [
      {
        startValue: "#181923",
        endValue: "#525364",
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
  return (
    <Plx className="titleParallax" parallaxData={parallaxDataColor}>
      <div id="sectionServices">
        <Tilt>
          <h1 className="section-title header">
            <div>SERVICIOS</div>
            <div>PROFESIONALES</div>
          </h1>
        </Tilt>

        <Plx className="imageParallax" parallaxData={parallaxModeFromLeft}>
          <CardService></CardService>
        </Plx>
        <Plx className="imageParallax" parallaxData={parallaxModeFromRight}>
          <CardService></CardService>
        </Plx>
        <Plx className="imageParallax" parallaxData={parallaxModeFromLeft}>
          <CardService></CardService>
        </Plx>
        <Plx className="imageParallax" parallaxData={parallaxModeFromRight}>
          <CardService></CardService>
        </Plx>
        <style jsx>{`
          #sectionServices {
            margin-top: -9vh;
            height: 100%;
            overflow: hidden;
            position: relative;
          }
          .section-title {
            padding-top: 40vh;
            text-align: center;
            margin-block-end: 0;
          }
        `}</style>
      </div>
    </Plx>
  );
};

SectionServices.propTypes = {};

export default SectionServices;
