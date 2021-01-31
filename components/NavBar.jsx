import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";
import { Sling as Hamburger } from "hamburger-react";

const MenuNav = ({
  color = "white",
  menuItems = [{ name: "Home", url: "/" }],
}) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Navbar sticky="top" collapseOnSelect expand="md">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="toggle-nav"
          style={{ borderColor: color }}
        >
          <span style={{ color: color }}>{isOpen ? "CERRAR" : "MENU"}</span>
          <Hamburger
            label="Menu principal"
            rounded
            duration={1}
            distance="lg"
            color={color}
            size={90}
            direction={"left"}
            toggled={isOpen}
            toggle={setOpen}
          />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-center ">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.url}>
                <Nav.Link className="px-5 " href={item.url}>
                  <h5
                    className="menuLink border-button"
                    style={{ color: color }}
                  >
                    {item.name.toUpperCase()}
                  </h5>
                </Nav.Link>
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

MenuNav.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, url: PropTypes.string })
  ),
};

export default MenuNav;
