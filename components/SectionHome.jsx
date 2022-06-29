import React, { useState } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import LazyHero from "react-lazy-hero";
import Image from "next/image";
import scrollDown from "public/scroll_down_servicios_psicologicos.gif";
import Link from "next/link";
import { particleOptions, motionForce } from "../utils/particles";
import ParticleImage from "react-particle-image";
import dynamic from "next/dynamic";

const NotMobile = dynamic(() => import("../components/NotMobile"), {
  ssr: false,
});

const SectionHome = (props) => {
  const [style, setStyle] = useState({
    display: "none",
    position: "relative",
    top: "40px",
    left: "10px",
  });
  const [style2, setStyle2] = useState({
    display: "block",
    position: "absolute",
    top: "40px",
    left: "10px",
  });
  return (
    <div id="sectionHome">
      {/* <LazyHero
        style={{  width: "100vw", paddingTop:"100px"}}
        parallaxOffset={200}
        color="#000"
        opacity={0.4}
        transitionDuration={1000}
        isCentered={true}
        minHeight={"90vh"}
        imageSrc="/portada_psicologo_puebla.jpg"
        height="90vh"
      > */}
      <NotMobile
        mobileChildren={
          <div className="logo">
            <img
              style={style2}
              src="/logo500.webp"
              width="150"
              height="150"
              className="align-top"
              alt="Logo Servicios Psicológicos"
            />
          </div>
        }
      >
        <div>
          <img
            style={style2}
            src="/logo500.webp"
            width="100"
            height="100"
            className="align-top"
            alt="Logo Servicios Psicológicos"
            onMouseEnter={(e) => {
              setStyle({
                display: "block",
                position: "absolute",
                top: "40px",
                left: "10px",
              });
              setStyle2({ display: "none" });
            }}
          />
          <ParticleImage
            onMouseLeave={(e) => {
              setStyle({ display: "none" });
              setStyle2({
                display: "block",
                position: "absolute",
                top: "40px",
                left: "10px",
              });
            }}
            style={style}
            src={"/logo100.png"}
            width={100}
            height={100}
            scale={1}
            entropy={0}
            maxParticles={3000}
            particleOptions={particleOptions}
            mouseMoveForce={motionForce}
          />
        </div>
      </NotMobile>
      <Row className="sectionButtonsContainer">
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

      <style jsx>{`
        #sectionHome {
        }
        .sectionButtonsContainer {
          top: 0;
          position: absolute;
          right: 30vw;
          z-index: 1040;
        }
      `}</style>

      {/* </LazyHero> */}
    </div>
  );
};

SectionHome.propTypes = {};

export default SectionHome;
