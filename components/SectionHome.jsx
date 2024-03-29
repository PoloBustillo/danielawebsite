import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import dynamic from "next/dynamic";

const NotMobile = dynamic(() => import("../components/NotMobile"), {
  ssr: false,
});
const IsMobile = dynamic(() => import("../components/IsMobile"), {
  ssr: false,
});

const SectionHome = (props) => {
  const [indexImg, setIndexImg] = useState(Math.floor(Math.random() * 4));
  useEffect(() => {
    const timer = setTimeout(() => {
      let index = Math.floor(Math.random() * 4);
      if (index == indexImg) index = Math.floor(Math.random() * 4);
      setIndexImg(index);
    }, 5000);
    return () => clearTimeout(timer);
  }, [indexImg]);

  return (
    <Container>
      <Row>
        <Col className="mx-auto my-auto" style={{ textAlign: "center" }}>
          <img src={props.images[indexImg]} width="100%" alt="Psicologa" />
        </Col>
        <NotMobile>
          <Col className="mx-auto my-auto" style={{ textAlign: "center" }}>
            <h5
              style={{
                color: "#9B287B",
                letterSpacing: "3px",
                fontSize: "15px",
              }}
            >
              {props.slogan}
            </h5>
            <h1
              className="title"
              style={{ color: "#17364E", fontSize: "20px" }}
            >
              {props.frase}
            </h1>
            <h6 style={{ color: "#17364E", fontSize: "18px" }}>
              {props.nombre}
            </h6>
          </Col>
        </NotMobile>
        <IsMobile>
          <Col className="mx-auto my-auto" style={{ textAlign: "center" }}>
            <div
              style={{
                color: "#9B287B",
                letterSpacing: "3px",
                fontSize: "12px",
              }}
            >
              {props.slogan}
            </div>
            <div
              className="title"
              style={{ color: "#17364E", fontSize: "10px" }}
            >
              "MENSAJE"
            </div>
          </Col>
        </IsMobile>
      </Row>
    </Container>
  );
};

SectionHome.propTypes = {};

export default SectionHome;
