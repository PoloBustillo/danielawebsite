import React, { useState } from "react";

import { Sling as Hamburger } from "hamburger-react";

const StickyBar = ({ color = "#888888", setOpenMenu, isMenuOpen }) => {
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
