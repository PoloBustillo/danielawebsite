import React from "react";
import PropTypes from "prop-types";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import Plx from "react-plx";
import Corgi from "public/corgiParticles3.png";
// An array of parallax effects to be applied - see below for detail
const parallaxData = [
  {
    start: -200,
    end: 600,
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: "scale",
      },
      {
        startValue: 0,
        endValue: 10,
        property: "letterSpacing",
      },
    ],
  },
];
const parallaxData2 = [
  {
    start: 0,
    end: 600,
    properties: [
      {
        startValue: -200,
        endValue: 0,
        property: "translateX",
      },
      {
        startValue: 0,
        endValue: 10,
        property: "letterSpacing",
      },
    ],
  },
];

const SectionServices = (props) => {
  return (
    <div id="sectionServices">
      <Plx className="titleParallax" parallaxData={parallaxData}>
        <h1 className="section-title header">
          <div>SERVICIOS</div>
          <div>PROFESIONALES</div>
        </h1>
      </Plx>
      <Plx className="imageParallax" parallaxData={parallaxData2}>
        <Image src={Corgi} alt="Sigue hacia abajo" width={100} height={100} />
      </Plx>
      <style jsx>{`
        #sectionServices {
          margin-top: -9vh;
          background-color: #1d1f20;
          height: 1000px;
        }
        .section-title {
          padding-top: 20vh;
          text-align: center;
          margin-block-end: 0;
        }
      `}</style>
    </div>
  );
};

SectionServices.propTypes = {};

export default SectionServices;
