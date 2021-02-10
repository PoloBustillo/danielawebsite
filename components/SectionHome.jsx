import React, { useState } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import LazyHero from "react-lazy-hero";
import Image from "next/image";
import scrollDown from "public/scroll-down3.gif";
import Link from "next/link";
import { particleOptions, motionForce } from "../utils/particles";
import ParticleImage from "react-particle-image";
import dynamic from "next/dynamic";
const LogoMobile = dynamic(() => import("../components/LogoMobile"), {
  ssr: false,
});

const SectionHome = (props) => {
  const [style, setStyle] = useState({ display: "none" });
  const [style2, setStyle2] = useState({ display: "block" });
  return (
    <div id="sectionHome">
      <LazyHero
        style={{ position: "unset", width: "100vw" }}
        parallaxOffset={200}
        color="#000"
        opacity={0.4}
        transitionDuration={1000}
        isCentered={true}
        minHeight={"75vh"}
        imageSrc="/heroImage.jpg"
      >
        <Row className="sectionButtonsContainer">
          <div>
            <img
              style={style2}
              src="/logonobg.png"
              width="100"
              height="100"
              className="align-top"
              alt="Daniela Díaz Merino Psicóloga"
              onMouseEnter={(e) => {
                setStyle({ display: "block" });
                setStyle2({ display: "none" });
              }}
            />
            <ParticleImage
              onMouseLeave={(e) => {
                setStyle({ display: "none" });
                setStyle2({ display: "block" });
              }}
              style={style}
              src={"/logonobgsmall.png"}
              width={100}
              height={100}
              scale={1}
              entropy={0}
              maxParticles={3000}
              particleOptions={particleOptions}
              mouseMoveForce={motionForce}
            />
          </div>
          <Col className="heroButtonContainer">
            <Button className="buttonHero element-animation">CITAS</Button>
          </Col>
          <Col className="heroButtonContainer">
            <Button className="buttonHero element-animation">MATERIAL</Button>
          </Col>
          <Col className="heroButtonContainer">
            <Link href="/#sectionServices">
              <Button className="buttonHero element-animation">
                SERVICIOS
              </Button>
            </Link>
          </Col>
        </Row>
        <div
          style={{
            position: "absolute",
            top: "40vh",
          }}
        >
          <LogoMobile></LogoMobile>
          <h5 style={{ color: "white", letterSpacing: "3px" }}>
            {props.slogan}
          </h5>
          <h1 className="title border-button" style={{ color: "white" }}>
            Psic. Daniela Diaz Merino
          </h1>
          <h6 style={{ color: "white" }}>Puebla, Mexico.</h6>
        </div>
        <div
          className="gifContainer"
          style={{ top: "35vh", position: "relative" }}
        >
          <Link href="/#sectionServices">
            <Image
              src={scrollDown}
              alt="Sigue hacia abajo"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <style jsx>{`
          .sectionButtonsContainer {
            width: 100vw !important;
            top: 0;import LogoMobile from './LogoMobile';

            position: absolute;
            right: 30vw;
            z-index: 1040;
          }
        `}</style>
      </LazyHero>
    </div>
  );
};

SectionHome.propTypes = {};

export default SectionHome;
