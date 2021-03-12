import React, { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import Footer from "../components/Footer";
import StickyBar from "../components/StickyBar";
import SideMenu from "../components/SideMenu";
import Seo from "../components/SEO";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const seo = {
  metaTitle:
    "Haz tu cita para cualquier terapia con la Piscocloga Daniela Diaz Merino",
  metaDescription:
    "Haz tu cita para cualquier terapia con la Piscocloga Daniela Diaz Merino",
};
const citas = (props) => {
  const [color, setColor] = useState();
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <Head>
        <title>
          Citas en Puebla - Citas Online - Puedes agendar tus citas{" "}
        </title>
        <meta
          name="title"
          content="Citas terapias - Citas psicologicas - Puedes agendar tus citas"
        />
        <meta
          name="description"
          content="Citas en Puebla - Agenda tu terapia - Citas psicologicas para jovenes, adultos y niños. Accede para conocer mas acerca de las citas"
        />
        <meta http-equiv="content-language" content="es" />
      </Head>

      <Navbar
        style={{
          backgroundColor: "#24201e !important",
          position: "fixed",
          top: "0",
          width: "100vw",
          height: "85px",
        }}
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand
          style={{
            fontFamily: "Playfair Display",
            fontWeight: "900",
            fontSize: "20px",
            fontStyle: "italic",
          }}
          href="/"
        >
          Psic. Daniela Diaz Merino
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/#sectionServices">
            {" "}
            <FontAwesomeIcon icon={faUndo} /> Regresar
          </Nav.Link>
        </Nav>
      </Navbar>
      <SideMenu isOpen={isOpen} setOpen={setOpen}></SideMenu>
      <div id="citaMenu">
        <StickyBar
          isMenuOpen={isOpen}
          setOpenMenu={setOpen}
          color={"black"}
        ></StickyBar>
      </div>
      <Seo seo={seo} />
      <iframe
        width="100%"
        height="2000px"
        src="https://psicdaniela.simplybook.me/v2/#book?widget-type=iframe&theme=bookingtroll&theme=bookingtroll&timeline=modern&datepicker=top_calendar#book"
      ></iframe>
      <Footer sitios={props.sitios}></Footer>
    </div>
  );
};

citas.propTypes = {};

export default citas;
