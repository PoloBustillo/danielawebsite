import React, { useState } from "react";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  faAngleUp,
  faAt,
  faPhoneAlt,
  faMapMarkerAlt,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { particleOptions, motionForce } from "../utils/particles";
import Link from "next/link";
import dynamic from "next/dynamic";
import { LazyLoadImage } from "react-lazy-load-image-component";
const NotMobile = dynamic(() => import("../components/NotMobile"), {
  ssr: false,
});
import {
  faLinkedinIn,
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import ParticleImage from "react-particle-image";

const Footer = (props) => {
  const [style, setStyle] = useState({ display: "none" });
  const [style2, setStyle2] = useState({ display: "block" });
  const shareUrl = `${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  return (
    <div style={{ padding: "20px 0", backgroundColor: "#FEFDFB" }}>
      <div
        style={{
          borderBottom: "1px solid #929292",
          paddingBottom: "12px",
          paddingTop: "15px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            color: "#082D46",
          }}
        >
          <Row
            style={{
              paddingLeft: "80px !important",
              paddingRight: "80px !important",
              justifyContent: "center",
            }}
          >
            <ul
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                display: "flex",
                listStyle: "none",
                justifyContent: "center",
              }}
            >
              <li>
                <OverlayTrigger
                  placement={"bottom"}
                  delay={{ show: 250, hide: 1000 }}
                  overlay={
                    <Tooltip>
                      <ParticleImage
                        src={"/corgiParticles3.png"}
                        width={100}
                        height={150}
                        scale={0.5}
                        entropy={0}
                        maxParticles={2000}
                        particleOptions={particleOptions}
                        mouseMoveForce={motionForce}
                      />
                    </Tooltip>
                  }
                >
                  <a>© Takito Corp</a>
                </OverlayTrigger>
              </li>
              <li>
                <a
                  href="/#sectionHome"
                  style={{ opacity: "1", fontWeight: "bold" }}
                >
                  IR A INICIO{" "}
                  <FontAwesomeIcon
                    fixedWidth
                    size="1x"
                    icon={faAngleUp}
                    style={{ float: "right" }}
                  />
                </a>
              </li>
            </ul>
          </Row>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            color: "#082D46",
            borderTop: "1px solid rgba(146,146,146,0.5)",
          }}
        >
          <Row
            style={{
              paddingLeft: "80px !important",
              paddingRight: "80px !important",
              justifyContent: "center",
            }}
          >
            <ul
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                display: "flex",
                listStyle: "none",
                justifyContent: "center",
              }}
            >
              <li>
                <a href="/DECLARACIONPRIVACIDAD.pdf" target="_blank">
                  AVISO&middot;DE&middot;PRIVACIDAD
                </a>
              </li>
              <li>
                <a href="/TERMINOSSERVICIO.pdf" target="_blank">
                  TERMINOS&middot;DE&middot;SERVICIO
                </a>
              </li>
              <li>
                <a href="https://wa.me/523317700339?text=Hola%20Psic.%20Daniela%20quisiera%20información%20acerca%20de:">
                  TECH&middot;SUPPORT
                </a>
              </li>
            </ul>
          </Row>
        </div>
      </div>
      <Row
        style={{
          color: "082D46",
          textAlign: "center",
          backgroundColor: "#FEFDFB",
        }}
      >
        <Col sm={6}>
          <span
            style={{
              fontFamily: "Playfair Display",
              fontWeight: "900",
              fontSize: "20px",
              fontStyle: "italic",
            }}
          >
            Psicologa Daniela Diaz Merino
          </span>

          <div id="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.323223481286!2d-98.24784688509992!3d19.00547368712844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x33f973c342c5addd!2sPsic%C3%B3logo%20Daniela%20Diaz%20Merino%20-%20Puebla%20-%20Terapia!5e0!3m2!1sen!2smx!4v1612124170876!5m2!1sen!2smx"
              frameBorder="0"
              style={{ border: "0", height: "35vh" }}
              allowFullScreen={false}
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
            <div className="social-container">
              <span id="social-icon">
                <a href={props.redes.linkedin} target="_blank">
                  <FontAwesomeIcon fixedWidth size="1x" icon={faLinkedinIn} />
                </a>
              </span>
              <span id="social-icon">
                <a href={`mailto:${props.email}`} target="_blank">
                  <FontAwesomeIcon fixedWidth size="1x" icon={faAt} />
                </a>
              </span>
              <span id="social-icon">
                <a href={props.redes.facebook} target="_blank">
                  <FontAwesomeIcon fixedWidth size="1x" icon={faFacebook} />
                </a>
              </span>
              <span id="social-icon">
                <a href={props.redes.instagram} target="_blank">
                  <FontAwesomeIcon fixedWidth size="1x" icon={faInstagram} />
                </a>
              </span>
              <span id="social-icon">
                <a href={props.redes.whatsapp} target="_blank">
                  <FontAwesomeIcon fixedWidth size="1x" icon={faWhatsapp} />
                </a>
              </span>
            </div>
          </div>
        </Col>
        <Col style={{ position: "relative", marginTop: "5vh" }} sm={3}>
          <span className="footerCol">MAPA DEL SITIO</span>
          <ul
            style={{
              flexWrap: "wrap",
              display: "flex",
              listStyle: "none",
              justifyContent: "center",
            }}
          >
            <li>
              <a href="/#sectionServices">TERAPIAS /</a>
            </li>
            <li>
              <a href="/faq">PREGUNTAS FRECUENTES /</a>
            </li>
            <li>
              <a href="/blogs">BLOGS /</a>
            </li>
            <li>
              <a href="/instituciones">INSTITUCIONES&middot;ASOCIADAS /</a>
            </li>
            <li>
              <a href="/citas">CITAS /</a>
            </li>
          </ul>
          <span style={{ marginTop: "10vh" }} className="footerCol">
            EXPLORAR SITIOS AFINES
          </span>
          <ul
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              display: "flex",
              listStyle: "none",
              justifyContent: "center",
            }}
          >
            {props.sitios?.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.URL}>
                    {item.Nombre?.toUpperCase().replace(" ", "·")} /
                  </a>
                </li>
              );
            })}
          </ul>
          <div
            style={{
              fontFamily: "WoodfordBournePRO",
              fonSize: "12px",
              lineHeight: "1.5",
              fontSize: "12px",
              margin: "2vmin",
              fontWeight: "900",
              cursor: "pointer",
            }}
          >
            <div>
              <FontAwesomeIcon fixedWidth size="1x" icon={faBrain} />
              Psicologa en Puebla.
            </div>
            <Link href={props.map}>
              <div>
                <FontAwesomeIcon fixedWidth size="1x" icon={faMapMarkerAlt} />
                {props.address.map((addressLine) => {
                  return <span>{addressLine.values} </span>;
                })}
              </div>
            </Link>
            <Link href={`mailto:${props.email}`}>
              <div>
                <FontAwesomeIcon fixedWidth size="1x" icon={faAt} />
                {props.email}
              </div>
            </Link>
            <Link href={`tel:${props.telefono}`}>
              <div>
                <FontAwesomeIcon fixedWidth size="1x" icon={faPhoneAlt} />
                {props.telefono}
              </div>
            </Link>
          </div>
        </Col>
        <Col style={{ position: "relative", marginTop: "5vh" }} sm={3}>
          <span className="footerCol">ACERCA DE NOSOTROS</span>
          <ul
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              display: "flex",
              listStyle: "none",
              justifyContent: "center",
            }}
          >
            <li>
              <a href="https://wa.me/5212211165866?text=Hola%20Psic.%20Daniela%20quisiera%20información%20acerca%20de:">
                CONTACTO /
              </a>
            </li>
            <li>
              <a href="/jobs">UNETE&middot;AL&middot;EQUIPO /</a>
            </li>
            <li>
              <a href="https://wa.me/5212211165866?text=Hola%20Psic.%20Daniela%20quisiera%20información%20acerca%20de:">
                TERAPIAS&middot;ESPECIALES
              </a>
            </li>
          </ul>
          <NotMobile>
            <div className="logo">
              <LazyLoadImage
                effect="blur"
                style={style2}
                src="/logo500.webp"
                width="200"
                height="200"
                className="align-top"
                alt="Logo Terapias Psicológicas"
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
        </Col>
      </Row>
      <style jsx>{`
        .logo {
          position: relative;
          float: right;
          left: -20%;
          margin-top: 10vh;
        }
        .footerSection {
          position: relative;
          top: 3vh;
        }
        a svg {
          margin-right: 1vw;
        }
        #social-icon a {
          color: #082d46;
          font-size: 30px;
        }
        #social-icon:hover {
          color: #082d46;
        }
        .footerCol {
          font-family: "Gotham-Book", "Arial", sans-serif;
          font-size: 12px;
          line-height: 1.5;
          color: #082d46;
          opacity: 0.9;
          text-decoration: none;
        }
        a {
          font-family: "Gotham-Book", "Arial", sans-serif;
          font-size: 10px;
          line-height: 1.5;
          color: #082d46;
          opacity: 0.7;
          padding: 12px 0;
          text-decoration: none !important;
        }
        .social-container {
          margin-top: 2vh;
        }

        a:hover {
          opacity: 1;
          color: #082d46;
        }
        li {
          margin-right: 20px !important;
          font-family: "Gotham-Book", "Arial", sans-serif;
          font-size: 10px;
          line-height: 1.5;
          opacity: 0.7;
          text-decoration: none;
        }
        .section-title {
          font-family: "Anton", sans-serif;
          color: #082d46;
          align-items: center;
          font-size: 15vw;
          padding-top: 20vh;
          text-align: center;
          margin-block-end: 0;
        }
        #map-container {
          margin: 2vmin;
          font-family: "Noto Sans";
        }
      `}</style>
    </div>
  );
};

export default Footer;
