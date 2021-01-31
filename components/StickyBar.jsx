import React, { useState } from "react";
import PropTypes from "prop-types";
import { particleOptions, motionForce } from "../utils/particles";
import ParticleImage from "react-particle-image";
import { Sling as Hamburger } from "hamburger-react";

const StickyBar = ({ color = "white", setOpenMenu, isMenuOpen }) => {
  const [style, setStyle] = useState({ display: "none" });
  const [style2, setStyle2] = useState({ display: "block" });
  const [isOpen, setOpen] = useState(isMenuOpen);

  return (
    <div
      style={{
        display: "flex",
        position: "sticky",
        top: "0",
        zIndex: "1030",
        margin: "2% 2%",
      }}
    >
      <div
        onMouseEnter={(e) => {
          setStyle({ display: "block" });
          setStyle2({ display: "none" });
        }}
      >
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
          maxParticles={6000}
          particleOptions={particleOptions}
          mouseMoveForce={motionForce}
        />
      </div>
      <div
        aria-controls="responsive-navbar-nav"
        className="toggle-nav"
        onClick={() => {
          setOpenMenu(!isMenuOpen);
          setOpen(!isMenuOpen);
        }}
        style={{
          borderColor: color,
          textAlign: "center",
          marginLeft: "auto",
          position: "relative",
        }}
      >
        <span style={{ color: color }}>{isMenuOpen ? "CERRAR" : "MENU"}</span>
        <Hamburger
          label="Menu principal"
          rounded
          duration={1}
          distance="lg"
          color={color}
          size={90}
          direction={"left"}
          toggled={isMenuOpen}
          toggle={setOpen}
        />
      </div>
    </div>
  );
};

StickyBar.propTypes = {};

export default StickyBar;
