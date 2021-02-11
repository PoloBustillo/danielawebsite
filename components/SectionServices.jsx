import React, { useState } from "react";
import PropTypes from "prop-types";
import Tilt from "react-parallax-tilt";
import Jump from "react-reveal/Jump";
import Plx from "react-plx";
import CardService from "./CardService";

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
        <Tilt>
          <h1 className="section-title header">
            <div>Servicios</div>
            <div>Profesionales</div>
          </h1>
        </Tilt>{" "}
        <Jump ssrFadeout>
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
        {props.terapias.map((terapia, index) => {
          console.log(terapia);
          return terapia.tipos_terapias?.map((tipo_terapia) => {
            if (index == 0) {
              return (
                <div className="firstCard">
                  <CardService
                    key={tipo_terapia.id}
                    terapia={tipo_terapia}
                  ></CardService>
                </div>
              );
            } else if (index % 2 == 0) {
              return (
                <Plx
                  key={tipo_terapia.id}
                  className="imageParallax"
                  parallaxData={parallaxModeFromLeft}
                >
                  <CardService terapia={tipo_terapia}></CardService>
                </Plx>
              );
            } else {
              return (
                <Plx
                  key={tipo_terapia.id}
                  className="imageParallax"
                  parallaxData={parallaxModeFromRight}
                >
                  <CardService terapia={tipo_terapia}></CardService>
                </Plx>
              );
            }
          });
        })}
        <style jsx>{`
          #sectionServices {
            margin-top: -9vh;
            height: 100%;
            overflow: hidden;
            position: relative;
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
            padding-top: 30vh;
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
