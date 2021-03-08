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

const NotMobile = dynamic(() => import("../components/NotMobile"), {
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
        minHeight={"100vh"}
        imageSrc="/heroImage.jpg"
        height="100vh"
      >
        <Row className="sectionButtonsContainer">
          <Col className="heroButtonContainer">
            <Link href="/citas">
              <Button className="buttonHero element-animation">Citas</Button>
            </Link>
          </Col>
          <Col className="heroButtonContainer">
            <Link href="/instituciones">
              <Button className="buttonHero element-animation">
                Instituciones
              </Button>
            </Link>
          </Col>
          <Col className="heroButtonContainer">
            <Link href="/#sectionServices">
              <Button className="buttonHero element-animation">
                Servicios
              </Button>
            </Link>
          </Col>
        </Row>
        <div
          style={{
            position: "absolute",
            bottom: "40vh",
            zIndex: "20",
          }}
        >
          <h5 style={{ color: "white", letterSpacing: "3px" }}>
            {props.slogan}
          </h5>
          <h1 className="title border-button" style={{ color: "white" }}>
            Psic. Daniela Diaz Merino
          </h1>
          <h6 style={{ color: "white" }}>Puebla, Mexico.</h6>
        </div>
        <Link href="/#sectionServices">
          <div
            className="gifContainer"
            style={{ top: "35vh", position: "relative" }}
          >
            <Image
              src={scrollDown}
              alt="Sigue hacia abajo"
              width={100}
              height={100}
            />
          </div>
        </Link>
        <style jsx>{`
          #sectionHome {
            height: 100vh !important;
          }
          .sectionButtonsContainer {
            width: 100vw !important;
            top: 0;

            position: absolute;
            right: 30vw;
            z-index: 1040;
          }
          .logo {
            position: absolute;
            bottom: 5%;
            right: 4%;
            z-index: 10;
          }
        `}</style>
        <NotMobile
          mobileChildren={
            <div className="logo">
              <img
                style={style2}
                src="/logo500.webp"
                width="150"
                height="150"
                className="align-top"
                alt="Daniela Díaz Merino Psicóloga"
              />
            </div>
          }
        >
          <div className="logo">
            <img
              style={style2}
              src="/logo500.webp"
              width="200"
              height="200"
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
              src={"/logo200nobg.png"}
              width={200}
              height={200}
              scale={1}
              entropy={0}
              maxParticles={3000}
              particleOptions={particleOptions}
              mouseMoveForce={motionForce}
            />
          </div>
        </NotMobile>
      </LazyHero>
    </div>
  );
};

SectionHome.propTypes = {};

export default SectionHome;
