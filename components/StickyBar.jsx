import React, { useState } from "react";

import { Spiral as Hamburger } from "hamburger-react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import Link from "next/link";

const StickyBar = ({ color = "rgba(29,181,120)", setOpenMenu, isMenuOpen }) => {
  const [isOpen, setOpen] = useState(isMenuOpen);

  return (
    <Navbar sticky="top" expand="xs" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#">
          <div className="logo">
            <img
              src="/logo500.webp"
              width="50"
              height="50"
              className="align-top"
              alt="Logo Servicios Psicológicos"
            />
          </div>
        </Navbar.Brand>{" "}
        <Row
          className="sectionButtonsContainer"
          style={{
            float: "right",
            margin: "30px",
            color: "#9B287B",
            width: "450px",
          }}
        >
          <Col className="heroButtonContainer">
            <Link href="https://daniela-cms-2.herokuapp.com/auth/google/callback">
              Pacientes
            </Link>
          </Col>
          <Col className="heroButtonContainer">
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
          <Col className="heroButtonContainer">
            <Link href="/instituciones">Instituciones</Link>
          </Col>
          <Col className="heroButtonContainer">
            <Link href="/#sectionServices">Servicios</Link>
          </Col>
        </Row>
        <Hamburger
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
