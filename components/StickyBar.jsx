import React, { useState } from "react";

import { Divide as Hamburger } from "hamburger-react";
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersLine } from "@fortawesome/free-solid-svg-icons";

const StickyBar = ({ color = "rgba(29,181,120)", setOpenMenu, isMenuOpen }) => {
  const [isOpen, setOpen] = useState(isMenuOpen);

  return (
    <Navbar
      sticky="top"
      expand="xs"
      style={{
        WebkitFilter: "blur(8px)",
        backdropFilter: "blur(8px)",
      }}
      color="#FEFDFB"
    >
      <Container>
        <Navbar.Brand href="#">
          <div className="logo">
            <img
              src="/logo500.webp"
              width="70"
              height="70"
              className="align-top"
              alt="Logo Servicios Psicológicos"
            />
          </div>
        </Navbar.Brand>

        <Col className="heroButtonContainer sectionButtonsContainer my-auto">
          <a
            onClick={() => {
              document
                .getElementsByClassName("simplybook-widget-button")[0]
                .click();
              document.getElementsByClassName(
                "simplybook-widget-button"
              )[0].onload = function () {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
              };
            }}
          >
            Citas
          </a>
        </Col>
        <Col className="heroButtonContainer sectionButtonsContainer my-auto">
          <Link href="/instituciones">Instituciones</Link>
        </Col>
        <Col className="heroButtonContainer sectionButtonsContainer my-auto">
          <Link href="/#sectionServices">Servicios</Link>
        </Col>

        <NavDropdown
          color="#9B287B"
          title={
            <FontAwesomeIcon size="xl" color="#9B287B" icon={faUsersLine} />
          }
          id="navbarScrollingDropdown"
        >
          <NavDropdown.Item href="#action3">Iniciar Sesión</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">Configuraciones</NavDropdown.Item>
        </NavDropdown>
        <Hamburger
          duration={1}
          toggled={isMenuOpen}
          toggle={() => {
            setOpenMenu(!isMenuOpen);
            setOpen(!isMenuOpen);
          }}
        />
      </Container>
    </Navbar>
  );
};

StickyBar.propTypes = {};

export default StickyBar;
