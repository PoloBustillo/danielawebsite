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
        <script src="//widget.simplybook.me/v2/widget/widget.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `var widget = new SimplybookWidget({"widget_type":"iframe","url":"https:\/\/psicdaniela.simplybook.me","theme":"bookingtroll","theme_settings":{"timeline_hide_unavailable":"0","timeline_show_end_time":"0","timeline_modern_display":"as_slots","sb_base_color":"#009cff","display_item_mode":"block","sb_review_image":"","dark_font_color":"#2d3a58","light_font_color":"#ffffff","btn_color_1":"#ff3f6c","sb_company_label_color":"#ffffff","hide_img_mode":"0","sb_busy":"#dad2ce","sb_available":"#d3e0f1"},"timeline":"modern","datepicker":"top_calendar","is_rtl":false,"app_config":{"allow_switch_to_ada":0,"predefined":[]}});`,
          }}
        />
      </Head>
    </div>
  );
};

citas.propTypes = {};

export default citas;
