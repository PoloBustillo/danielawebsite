import React, { useState } from "react";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";
import { particleOptions, motionForce } from "../utils/particles";
import ParticleImage from "react-particle-image";

const LogoMobile = (props) => {
  const [style, setStyle] = useState({ display: "none" });
  const [style2, setStyle2] = useState({ display: "block" });
  return isMobile ? (
    <div id="logoMobile">
      <img
        style={style2}
        src="/logonobg.png"
        width="100"
        height="100"
        className="align-top"
        alt="Daniela Díaz Merino Psicóloga"
        onMouseEnter={(e) => {
          setStyle({ display: "block" });
          setStyle2({ display: "none" });
        }}
      />
      <ParticleImage
        onMouseLeave={(e) => {
          setStyle({ display: "none" });
          setStyle2({ display: "block" });
        }}
        style={style}
        src={"/logonobgsmall.png"}
        width={100}
        height={100}
        scale={1}
        entropy={0}
        maxParticles={3000}
        particleOptions={particleOptions}
        mouseMoveForce={motionForce}
      />
      <style jsx>{`
        #logoMobile {
          position: absolute;
          top: -30vh;
        }
      `}</style>
    </div>
  ) : null;
};

LogoMobile.propTypes = {};

export default LogoMobile;
