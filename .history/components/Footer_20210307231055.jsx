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
    <div style={{ padding: "20px 0", backgroundColor: "#24201e" }}>
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
            color: "white",
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
                  IR A HOME{" "}
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
            color: "white",
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
          color: "white",
          textAlign: "center",
          backgroundColor: "#24201e",
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
                <Link href="https://linkedin.com/in/daniela-diaz-408967144">
                  <FontAwesomeIcon fixedWidth size="2x" icon={faLinkedinIn} />
                </Link>
              </span>
              <span id="social-icon">
                <Link href="mailto:danieladimersic@gmail.com">
                  <FontAwesomeIcon fixedWidth size="2x" icon={faAt} />
                </Link>
              </span>
              <span id="social-icon">
                <Link href="https://www.facebook.com/PsicoterapiaDiazMer">
                  <FontAwesomeIcon fixedWidth size="2x" icon={faFacebook} />
                </Link>
              </span>
              <span id="social-icon">
                <Link href="https://www.instagram.com/psic.danielaedm/">
                  <FontAwesomeIcon fixedWidth size="2x" icon={faInstagram} />
                </Link>
              </span>
              <span id="social-icon">
                <Link href="https://wa.me/5212211165866?text=Hola%20Psic.%20Daniela%20quisiera%20información%20acerca%20de:">
                  <FontAwesomeIcon fixedWidth size="2x" icon={faWhatsapp} />
                </Link>
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
              <a href="/#sectionServices">SERVICIOS /</a>
            </li>
            <li>
              <a href="/#sectionFAQ">FAQ /</a>
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
            }}
          >
            <div>
              <FontAwesomeIcon fixedWidth size="1x" icon={faBrain} />
              Psicologa en Puebla.
            </div>
            <Link href="https://goo.gl/maps/kmrqWeGX3nQRaU8q7">
              <div>
                <FontAwesomeIcon fixedWidth size="1x" icon={faMapMarkerAlt} />
                Mártires del 2 de Octubre, Reserva Territorial Atlixcáyotl,
                Ex-Rancho Vaquerías, 72464 Puebla, Pue.
              </div>
            </Link>
            <Link href="tel:2211165866">
              <div>
                <FontAwesomeIcon fixedWidth size="1x" icon={faPhoneAlt} />
                22&middot;11&middot;16&middot;58&middot;66
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
                SERVICIOS&middot;ESPECIALES
              </a>
            </li>
          </ul>
          <NotMobile>
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
        #social-icon:hover {
          color: bisque;
        }
        .footerCol {
          font-family: "Gotham-Book", "Arial", sans-serif;
          font-size: 12px;
          line-height: 1.5;
          color: white;
          opacity: 0.9;
          text-decoration: none;
        }
        a {
          font-family: "Gotham-Book", "Arial", sans-serif;
          font-size: 10px;
          line-height: 1.5;
          color: white;
          opacity: 0.7;
          padding: 12px 0;
          text-decoration: none !important;
        }
        .social-container {
          margin-top: 2vh;
        }

        a:hover {
          opacity: 1;
          color: chartreuse;
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
          color: white;
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
