import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { particleOptions, motionForce } from "../utils/particles";
import ParticleImage from "react-particle-image";
import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
const Footer = () => {
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
                <a>© Takito Corp</a>
              </li>
              <li>
                <a style={{ opacity: "1", fontWeight: "bold" }}>
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
                <a>AVISO DE PRIVACIDAD</a>
              </li>
              <li>
                <a>TERMINOS</a>
              </li>
              <li>
                <a>TECH SUPPORT</a>
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
            Psic. Daniela Diaz Merino
          </span>
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
            Psicologa en Puebla, Mexico. Rancho Ex-Vaquerias.
          </div>

          <div id="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.323223481286!2d-98.24784688509992!3d19.00547368712844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x33f973c342c5addd!2sPsic%C3%B3logo%20Daniela%20Diaz%20Merino%20-%20Puebla%20-%20Terapia!5e0!3m2!1sen!2smx!4v1612124170876!5m2!1sen!2smx"
              frameBorder="0"
              style={{ border: "0", height: "35vh", width: "40vw" }}
              allowFullScreen={false}
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
            <div className="social-container">
              <FacebookShareButton
                quote={`Te invito a checar esta terapia`}
                url={shareUrl}
                hashtag={"#Puebla"}
              >
                <FacebookIcon
                  size={32}
                  bgStyle={{
                    fill: "transparent",
                    stroke: "white",
                    border: "solid white",
                  }}
                  iconFillColor={"white"}
                  round={true}
                />
              </FacebookShareButton>
              <WhatsappShareButton url={shareUrl}>
                <WhatsappIcon
                  bgStyle={{
                    fill: "transparent",
                    stroke: "white",
                    border: "solid white",
                  }}
                  iconFillColor={"white"}
                  size={32}
                  round={true}
                />
              </WhatsappShareButton>
              <TelegramShareButton
                title={`Te invito a checar esta terapia`}
                url={shareUrl}
              >
                <TelegramIcon
                  bgStyle={{
                    fill: "transparent",
                    stroke: "white",
                    border: "solid white",
                  }}
                  iconFillColor={"white"}
                  size={32}
                  round={true}
                />
              </TelegramShareButton>
              <TwitterShareButton
                title={`Te invito a checar esta terapia`}
                hashtags={["Psicologo", "Puebla", "Psicologa"]}
                url={shareUrl}
              >
                <TwitterIcon
                  bgStyle={{
                    fill: "transparent",
                    stroke: "white",
                    border: "solid white",
                  }}
                  iconFillColor={"white"}
                  size={32}
                  round={true}
                />
              </TwitterShareButton>
              <EmailShareButton
                subject={`Te invito a checar esta terapia`}
                body={""}
              >
                <EmailIcon
                  bgStyle={{
                    fill: "transparent",
                    stroke: "white",
                    border: "solid white",
                  }}
                  iconFillColor={"white"}
                  size={32}
                  round={true}
                />
              </EmailShareButton>
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
              <a>SERVICIOS /</a>
            </li>
            <li>
              <a>FAQ /</a>
            </li>
            <li>
              <a>BLOG /</a>
            </li>
            <li>
              <a>INSTITUCIONES&middot;ASOCIADAS /</a>
            </li>
            <li>
              <a>CITAS /</a>
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
            <li>
              <a>PARROQUIA&middot;TEZIUTLAN /</a>
            </li>
            <li>
              <a>ORATORIO&middot;DON&middot;BOSCO /</a>
            </li>
            <li>
              <a>OTROS /</a>
            </li>
          </ul>
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
              <a>CONTACTO /</a>
            </li>
            <li>
              <a>UNETE&middot;AL&middot;EQUIPO /</a>
            </li>
            <li>
              <a>SERVICIOS&middot;ESPECIALES</a>
            </li>
          </ul>
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
        svg {
          margin-right: 1vw;
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
          text-decoration: none;
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
