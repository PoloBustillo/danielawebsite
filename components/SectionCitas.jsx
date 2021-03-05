import React, { useState } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import SingnIn from "../components/SingnIn";
import { Row, Card, Container, Col } from "react-bootstrap";
import { useSession, signIn, signOut } from "next-auth/client";

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

function getStepContent(step, handleBack, handleNext) {
  switch (step) {
    case 0:
      return <SingnIn handleNext={handleNext}></SingnIn>;
    case 1:
      return (
        <div>
          <div style={{ height: "800px" }}>
            <iframe
              src="https://calendly.com/psic-danieladiazmerino"
              width="100%"
              height="100%"
              frameborder="0"
            ></iframe>
          </div>

          <div>
            <Button disabled={step === 0} onClick={handleBack}>
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
              {step === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        </div>
      );
    case 2:
      return (
        <div>
          An ad group contains one or more ads which target a shared set of
          keywords
          <div>
            <Button disabled={step === 0} onClick={handleBack}>
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
              {step === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
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

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      return prevActiveStep + 1;
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div id="sectionCitasContainer" style={{ justifyContent: "center" }}>
      <div className="services-header">
        <h1 className="section-title header">
          <div>Haz tu Cita</div>
          <div>Facil y sencillo</div>
        </h1>
      </div>

      <Row id="sectionCitas" style={{ justifyContent: "center" }}>
        <Container>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <div>{getStepContent(index, handleBack, handleNext)}</div>
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
