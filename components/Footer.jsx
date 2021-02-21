import React from "react";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div style={{ padding: "55px 0", backgroundColor: "rgba(0, 0, 0)" }}>
      <Row
        style={{
          color: "white",
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0)",
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
            Daniela Diaz Merino
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
            Psicologa en Puebla, Mexico. Sign up for the latest beauty news,
            product samples and coupons
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
          </div>
        </Col>
        <Col sm={3}>Mapa del Sitio</Col>
        <Col sm={3}>Contacto</Col>

        <style jsx>{`
          #map-container {
            margin: 2vmin;
            font-family: "Noto Sans";
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
        `}</style>
      </Row>
    </div>
  );
};

export default Footer;
