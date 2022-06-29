import React, { useState } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import LazyHero from "react-lazy-hero";
import Image from "next/image";
import Link from "next/link";
import { particleOptions, motionForce } from "../utils/particles";
import ParticleImage from "react-particle-image";
import dynamic from "next/dynamic";

const NotMobile = dynamic(() => import("../components/NotMobile"), {
  ssr: false,
});

const SectionHome = (props) => {
  const [style, setStyle] = useState({
    display: "none",
    position: "absolute",
    top: "300px",
    left: "1020px",
    zIndex: "300",
  });
  const [style2, setStyle2] = useState({
    display: "block",
    position: "absolute",
    top: "300px",
    left: "1020px",
  });
  return (
    <div id="sectionHome">
      <NotMobile mobileChildren={<></>}>
        <div>
          <img
            style={style2}
            src="/logo500.webp"
            width="100"
            height="100"
            className="align-top"
            alt="Logo Servicios Psicológicos"
            onMouseEnter={(e) => {
              setStyle({
                display: "block",
                position: "absolute",
                top: "300px",
                left: "1020px",
              });
              setStyle2({ display: "none" });
            }}
          />
          <ParticleImage
            onMouseLeave={(e) => {
              setStyle({ display: "none" });
              setStyle2({
                display: "block",
                position: "absolute",
                top: "300px",
                left: "1020px",
              });
            }}
            style={style}
            src={"/logo100.png"}
            width={100}
            height={100}
            scale={1}
            entropy={0}
            maxParticles={3000}
            particleOptions={particleOptions}
            mouseMoveForce={motionForce}
          />
        </div>
      </NotMobile>

      <style jsx>{`
        #sectionHome {
        }
        .sectionButtonsContainer {
          top: 0;
          position: absolute;
          right: 30vw;
          z-index: 1040;
        }
      `}</style>
    </div>
  );
};

SectionHome.propTypes = {};

export default SectionHome;
