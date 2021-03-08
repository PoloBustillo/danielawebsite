import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import PropTypes from "prop-types";
import Footer from "./Footer";

const SinglePageLayout = (props) => {
  return (
    <>
      <Navbar style={{ backgroundColor: "#24201e" }} bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <p
            style={{
              width: "50vw",
              wordWrap: "break-word",
              whiteSpace: "initial",
            }}
          >
            {props.title ? props.title : "Psic. Daniela Diaz Merino"}
          </p>
        </Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link href="/#sectionServices">Regresar</Nav.Link>
          <a
            href="/citas"
            onClick={() => props.setOpen(false)}
            className="bm-item menu-item"
          >
            Citas
          </a>

          <Link id="contact" className="menu-item" href="/blogs">
            <a
              onClick={() => props.setOpen(false)}
              className="bm-item menu-item"
            >
              <FontAwesomeIcon icon={faFilm} /> Recursos
            </a>
          </Link>
          <Nav.Link href={`/citas?terapia=${props.id ? props.id : "all"}`}>
            <FontAwesomeIcon icon={faCalendarAlt} /> Cita
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
