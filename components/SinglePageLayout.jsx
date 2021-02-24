import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import PropTypes from "prop-types";
import Footer from "./Footer";

const SinglePageLayout = (props) => {
  return (
    <>
      <Navbar style={{ backgroundColor: "#24201e" }} bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          {props.title ? props.title : "Psic. Daniela Diaz Merino"}
        </Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link href="/#sectionServices">Regresar</Nav.Link>
          <Nav.Link href={`/cita?terapia=${props.id ? props.id : "all"}`}>
            Cita
          </Nav.Link>
        </Nav>
      </Navbar>
      {props.children}
      <Footer sitios={props.sitios}></Footer>
    </>
  );
};

SinglePageLayout.propTypes = {};

export default SinglePageLayout;
