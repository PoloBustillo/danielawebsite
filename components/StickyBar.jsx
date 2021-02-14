import React, { useState } from "react";

import { Sling as Hamburger } from "hamburger-react";

const StickyBar = ({ color = "white", setOpenMenu, isMenuOpen }) => {
  const [isOpen, setOpen] = useState(isMenuOpen);

  return (
    <div
      style={{
        display: "flex",
        position: "sticky",
        top: "0",
        zIndex: "1030",
        overflow: "hidden",
        width: "100vw",
        height: "100%",
      }}
    >
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
          zIndex: "200",
          padding: 0.8vh;
          position: "relative",
        }}
      >
        <span style={{ color: isMenuOpen ? "white" : color }}>
          {isMenuOpen ? "CERRAR" : "MENU"}
        </span>
        <Hamburger
          label="Menu principal"
          rounded
          duration={1}
          distance="lg"
          color={isMenuOpen ? "white" : color}
          size={90}
          direction={"left"}
          toggled={isMenuOpen}
          toggle={setOpen}
        />
      </div>
      <div class="box"></div>
    </div>
  );
};

StickyBar.propTypes = {};

export default StickyBar;
