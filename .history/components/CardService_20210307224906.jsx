import React from "react";
import ReactMarkdown from "react-markdown";
import {
  Card,
  Button,
  Col,
  Row,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import PropTypes from "prop-types";
import marked from "marked";
import {
  faCalendarDay,
  faDollarSign,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<i class="fas fa-calendar-day"></i>;
import Fade from "react-reveal/Fade";
import { AwesomeButton } from "react-awesome-button";
import scrollDown from "public/scroll-down3.gif";
import Link from "next/link";
const myLoader = ({ src, width, quality }) => {
  return `${src}`;
};

const CardService = (props) => {
  return (
    <Fade bottom ssrFadeout fraction={0.05} distance={"100px"}>
      <Card
        style={{
          ...props.style,
          margin: "3vh 0",
          backgroundColor: "white",
          color: "rgb(41, 47, 69)",
          textAlign: "center",
          border: "none",
          backdropFilter: "blur(92px)",
          boxShadow: "0 0 30px #bfbfbf",
          minHeight: "100%",
        }}
      >
        <Card.Body style={{ padding: "0.8rem", minHeight: "100%" }}>
          <Link href={`/tratamiento/${props.terapia.id}`}>
            <Card.Img
              style={{
                height: "55.45%",
                width: "100%",
                minHeight: "270px",
                maxHeight: "270px",
              }}
              variant="bottom"
              src={props.terapia?.Contenido[0]?.Imagen.url}
            />
          </Link>
          <Link href={`/tratamiento/${props.terapia.id}`}>
            <Card.Title
              style={{
                margin: "2vh 0",
                fontFamily: "Noto Sans",
                fontWeight: "900",
                color: "#4a5568",
              }}
            >
              {" "}
              {props.terapia?.Nombre}
            </Card.Title>
          </Link>

          <div
            style={{
              textAlign: "center",
              fontFamily: "source-sans-pro, sans-serif",
              fontWeight: "300",
              fontStyle: "normal",
              width: "80%",
              marginLeft: "10%",
              marginTop: "2vh",
              marginBottom: "2vh",
            }}
          >
            <ReactMarkdown
              source={props.terapia?.Contenido[0]?.Descripcion}
              escapeHtml={false}
            />
          </div>
          <OverlayTrigger
            placement={"bottom"}
            overlay={
              <Tooltip id={`tooltip-bottom`}>
                Precio puede ajustarse de acuerdo a un{" "}
                <strong>estudio socieconómico</strong> o si pertenece a alguna{" "}
                <strong>institución asociada</strong>
              </Tooltip>
            }
          >
            <span>
              Costo:{" "}
              <FontAwesomeIcon
                fixedWidth
                size="sm"
                icon={faDollarSign}
              ></FontAwesomeIcon>
              {props.terapia?.Contenido[0]?.Costo}
              <FontAwesomeIcon
                style={{ verticalAlign: "5px", fontSize: "15px" }}
                fixedWidth
                size="sm"
                icon={faQuestionCircle}
              ></FontAwesomeIcon>
            </span>
            <span>
              Sesión en linea:{" "}
              <FontAwesomeIcon
                fixedWidth
                size="sm"
                icon={faDollarSign}
              ></FontAwesomeIcon>
              {props.terapia?.Contenido[0]?.Costo}
              <FontAwesomeIcon
                style={{ verticalAlign: "5px", fontSize: "15px" }}
                fixedWidth
                size="sm"
                icon={faQuestionCircle}
              ></FontAwesomeIcon>
            </span>
          </OverlayTrigger>
          <div
            style={{
              borderBottom: "1px solid #d8e3f2",
              margin: "3vh 0vw",
            }}
          ></div>
          <Row>
            <Col
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
              <AwesomeButton
                button-primary-color={"#000"}
                button-raise-level={"5px"}
                size="medium"
                type="primary"
              >
                <span style={{ fontFamily: "Noto Sans" }}>
                  <FontAwesomeIcon fixedWidth size="sm" icon={faCalendarDay} />{" "}
                  Citas
                </span>
              </AwesomeButton>
            </Col>
            <Col>
              <Card.Link style={{ fontFamily: "Noto Sans", color: "#325c99" }}>
                <Link href={`/tratamiento/${props.terapia.id}`}>
                  Más Información
                </Link>
              </Card.Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Fade>
  );
};

CardService.propTypes = {};

export default CardService;
