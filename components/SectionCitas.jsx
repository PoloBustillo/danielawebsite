import React, { useState } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { useSession, signIn, signOut } from "next-auth/client";
import StepWizard from "react-step-wizard";
import { Row, Card, Container, Col, ProgressBar } from "react-bootstrap";
import {
  faLinkedinIn,
  faFacebook,
  faGoogle,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
const steps = ["REGISTRO", "FECHA", "HORA"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <div>
          <div style={{ textAlign: "center" }}>
            <h4>Registrate</h4>
          </div>
          <Row style={{ textAlign: "center" }}>
            <Col>
              <Card
                border="dark"
                onClick={async () => {
                  signIn("google", {
                    callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/#sectionCitas`,
                  });
                  //router.push("/citas");
                }}
              >
                <Card.Body>
                  <span id="social-icon">
                    <FontAwesomeIcon fixedWidth size="4x" icon={faGoogle} />
                  </span>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Google</small>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card border="dark">
                <Card.Body>
                  <span id="social-icon">
                    <FontAwesomeIcon fixedWidth size="4x" icon={faFacebook} />
                  </span>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Facebook</small>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card border="dark">
                <Card.Body>
                  <span id="social-icon">
                    <FontAwesomeIcon fixedWidth size="4x" icon={faInstagram} />
                  </span>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Instagram</small>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </div>
      );
    case 1:
      return (
        <div>
          An ad group contains one or more ads which target a shared set of
          keywords
        </div>
      );
    default:
      return "Unknown step";
  }
}

const SectionCitas = (props) => {
  const [active, setActive] = useState(0);
  const [session, loading] = useSession();
  const [activeStep, setActiveStep] = React.useState(0);
  const [SW, setSW] = useState();
  console.log("SESSION", session, process.env.NEXTAUTH_URL);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      console.log(prevActiveStep);
      console.log(steps.length);
      if (prevActiveStep < steps.length) {
        return prevActiveStep + 1;
      }

      return prevActiveStep;
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div id="sectionCitas" style={{ justifyContent: "center" }}>
      <div className="services-header">
        <h1 className="section-title header">
          <div>Haz tu Cita</div>
          <div>Facil y sencillo</div>
        </h1>
      </div>

      <Row style={{ justifyContent: "center" }}>
        <Row
          style={{
            display: "flex",
            marginTop: "-45px",
            justifyContent: "center",
            color: "#007bff",
            width: "95%",
            marginRight: "10% !important",
            marginLeft: "10% !important",
          }}
        >
          <div style={{ width: "100%", fontSize: "17px" }}>
            {activeStep < steps.length - 1 && (
              <ProgressBar
                style={{ width: "100%", fontSize: "17px" }}
                animated
                now={100 * ((activeStep + 1) / steps.length)}
                label={`${steps[activeStep]}`}
              />
            )}
          </div>
        </Row>
        <Container>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <div>
                    {getStepContent(index)}
                    <div>
                      <Button disabled={activeStep === 0} onClick={handleBack}>
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset}>Reset</Button>
            </Paper>
          )}
        </Container>
      </Row>
      <style jsx>{`
        #sectionCitas {
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
        .jumbotron {
          background-color: #25201f !important;
        }
        .progress {
          width: 100% !important;
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

SectionCitas.propTypes = {};

export default SectionCitas;
