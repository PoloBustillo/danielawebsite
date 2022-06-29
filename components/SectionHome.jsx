import React, { useState } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import LazyHero from "react-lazy-hero";
import Image from "next/image";
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
    left: "20px",
  });
  const [style2, setStyle2] = useState({
    display: "block",
    position: "absolute",
    top: "40px",
    left: "20px",
  });
  return (
    <div id="sectionHome">
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
                left: "20px",
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
                left: "20px",
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
    </div>
  );
};

SectionHome.propTypes = {};

export default SectionHome;
