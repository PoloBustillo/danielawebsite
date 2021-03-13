import React, { useState } from "react";
import PropTypes from "prop-types";
import CardService from "./CardService";
import { Row, Col } from "react-bootstrap";
import SubMenuServices from "./SubMenuServices";
import MessengerCustomerChat from "react-messenger-customer-chat";
import LazyLoad from "react-lazyload";
const parallaxDataColor = [
  {
    start: "self",
    duration: 5000,
    properties: [
      {
        startValue: "#f7f8fc",
        endValue: "#FFFFFF",
        property: "backgroundColor",
      },
    ],
  },
];

const SectionServices = (props) => {
  return (
    <div id="sectionServices" style={{ justifyContent: "center" }}>
      <div className="services-header">
        <h1 className="section-title header">
          <div>Servicios</div>
          <div>Psicológicos</div>
          <div>Puebla/Online</div>
        </h1>
      </div>

      <Row style={{ justifyContent: "center" }}>
        <Row
          style={{
            display: "flex",
            marginTop: "-45px",
            justifyContent: "center",
            color: "#007bff",
          }}
        >
          <SubMenuServices
            areas={props.areas}
            setFilter={props.setFilter}
          ></SubMenuServices>
        </Row>
        <Row className="row-cards">
          {props.terapias.map((terapia, index) => {
            return terapia.tipos_terapias?.map((tipo_terapia) => {
              return (
                <Col xs={12} md={6} lg={{ span: 4 }}>
                  <CardService
                    key={tipo_terapia.id}
                    terapia={tipo_terapia}
                  ></CardService>
                </Col>
              );
            });
          })}
        </Row>
      </Row>
      <style jsx>{`
        #sectionServices {
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

SectionServices.propTypes = {};

export default SectionServices;
