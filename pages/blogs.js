import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import HeadShake from "react-reveal/HeadShake";
import Fade from "react-reveal/Fade";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Accordion, Card } from "react-bootstrap";

const Blogs = (props) => {
  const [accordionSelected, setAccordionSelected] = useState();
  const [flag, setFlag] = useState();
  return (
    <div id="sectionFAQ">
      <Head>
        <title>
          Contenido psicologia - Articulos terapeuticos - Aprende y comparte
        </title>
        <meta name="title" content="Blog relacionado con psicología " />
        <meta
          name="description"
          content="Quieres saber mas acerca de las terapias y metodologias usadas en las sesiones terapeuticas? Entra y conoce mas."
        />
        <meta http-equiv="content-language" content="es" />
        <script
          dangerouslySetInnerHTML={{
            __html: `var widget = new SimplybookWidget({"widget_type":"iframe","url":"https:\/\/psicdaniela.simplybook.me","theme":"bookingtroll","theme_settings":{"timeline_hide_unavailable":"0","timeline_show_end_time":"0","timeline_modern_display":"as_slots","sb_base_color":"#0a3d65","display_item_mode":"list","sb_review_image":"4","sb_review_image_preview":"\/uploads\/psicdaniela\/image_files\/preview\/66e70686719fc5b091f04a8714131686.png","dark_font_color":"#262020","light_font_color":"#ecf0f9","btn_color_1":"#ffa64c","sb_company_label_color":"#ffffff","hide_img_mode":"0","sb_busy":"#f57070","sb_available":"#f7faff"},"timeline":"modern","datepicker":"top_calendar","is_rtl":false,"app_config":{"allow_switch_to_ada":0,"predefined":[]}});`,
          }}
        />
      </Head>
      <div className="services-header">
        <h1 className="section-title header">
          <div>BLOGS</div>
        </h1>
      </div>

      <Row style={{ justifyContent: "center" }}>
        <Col
          style={{ margin: "4vh 0" }}
          sm={{ span: 8 }}
          centered={"true"}
        ></Col>
      </Row>
      <style jsx>{`
        .colfaq {
          margin: 4vh 0 !important;
        }
        #sectionFAQ {
          height: 100%;
          overflow: hidden;
          background-color: rgb(236, 240, 249);
          position: relative;
        }
        .services-header {
          font-family: muli, sans-serif !important;
          font-size: 6vh;
          font-weight: 600;
          padding: 10vmin;
          background-color: rgb(255, 255, 255);
          margin-bottom: 2vh;
        }
        .section-title {
          text-align: center;
          color: rgb(41, 47, 69);
          font-weight: 900;
          margin-block-end: 0;
          font-family: "Noto Sans";
        }
      `}</style>
    </div>
  );
};

Blogs.propTypes = {};

export default Blogs;
