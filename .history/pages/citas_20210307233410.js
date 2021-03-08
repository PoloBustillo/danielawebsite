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
        <script
          dangerouslySetInnerHTML={{
            __html: `var widget = new SimplybookWidget({"widget_type":"iframe","url":"https:\/\/psicdaniela.simplybook.me","theme":"bookingtroll","theme_settings":{"timeline_hide_unavailable":"0","timeline_show_end_time":"0","timeline_modern_display":"as_slots","sb_base_color":"#0a3d65","display_item_mode":"list","sb_review_image":"4","sb_review_image_preview":"\/uploads\/psicdaniela\/image_files\/preview\/66e70686719fc5b091f04a8714131686.png","dark_font_color":"#262020","light_font_color":"#ecf0f9","btn_color_1":"#ffa64c","sb_company_label_color":"#ffffff","hide_img_mode":"0","sb_busy":"#f57070","sb_available":"#f7faff"},"timeline":"modern","datepicker":"top_calendar","is_rtl":false,"app_config":{"allow_switch_to_ada":0,"predefined":[]}});`,
          }}
        />
      </Head>

      <Navbar
        style={{
          backgroundColor: "#24201e !important",
          position: "fixed",
          top: "0",
          width: "100vw",
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
      <Footer sitios={props.sitios}></Footer>
    </div>
  );
};

citas.propTypes = {};

export default citas;
