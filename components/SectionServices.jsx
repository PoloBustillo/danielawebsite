import React, { useState } from "react";
import CardService from "./CardService";
import { Row, Col } from "react-bootstrap";
import SubMenuServices from "./SubMenuServices";
import { Parallax } from "react-parallax";

const insideStyles = {
  background: "transparent",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

const SectionServices = (props) => {
  return (
    <div id="sectionServices" style={{ justifyContent: "center" }}>
      <Parallax
        bgImage={"tes.jpeg"}
        strength={200}
        renderLayer={(percentage) => (
          <div>
            <div
              style={{
                position: "absolute",
                background: `rgba(163, 211, 209,${percentage * 1})`,
                left: "50%",
                top: "50%",
                borderRadius: "50%",
                transform: "translate(-50%,-50%)",
                width: (1 + percentage) * 150,
                height: (1 + percentage) * 150,
              }}
            />
          </div>
        )}
      >
        <div style={{ height: 900 }}>
          <div style={insideStyles}>
            <div className="services-header">
              <span className="section-title header">
                <div>Terapias Psicológicas</div>
                <div></div>
                <div>Puebla y Online</div>
              </span>
            </div>
          </div>
        </div>
      </Parallax>

      <Row style={{ justifyContent: "center" }}>
        <Row
          style={{
            display: "flex",
            marginTop: "0px",
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
          background-color: transparent;
          position: relative;
        }
        .services-header {
          font-family: muli, sans-serif !important;
          font-size: 4vh;
          font-weight: 600;
          padding: 10vmin;
          background-color: transparent;
          margin-bottom: 2vh;
        }
        .section-title {
          text-align: center;
          color: #082d46;
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
