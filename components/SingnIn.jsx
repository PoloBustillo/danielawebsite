import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import { useSession, signIn, signOut } from "next-auth/client";
import { Row, Card, Container, Col } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import {
  faLinkedinIn,
  faFacebook,
  faGoogle,
  faTwitter,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { faAt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SingnIn = (props) => {
  const [session, loading] = useSession();

  return session === undefined || session === null ? (
    <div>
      <div style={{ textAlign: "center" }}>
        <h4>Registrate</h4>
        {session !== undefined?.user.name}
      </div>
      <Row style={{ textAlign: "center" }}>
        <Col sm={4}>
          <Card
            border="dark"
            onClick={async () => {
              signIn("google", {
                callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/#sectionCitas`,
              });
              props.handleNext();
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
        <Col sm={4}>
          <Card
            border="dark"
            onClick={async () => {
              signIn("facebook", {
                callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/#sectionCitas`,
              });
              props.handleNext();
            }}
          >
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
        <Col sm={4}>
          <Card
            border="dark"
            onClick={async () => {
              signIn("spotify", {
                callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/#sectionCitas`,
              });
              props.handleNext();
            }}
          >
            <Card.Body>
              <span id="social-icon">
                <FontAwesomeIcon fixedWidth size="4x" icon={faSpotify} />
              </span>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Spotify</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  ) : (
    <Row>
      <Col style={{ textAlign: "center" }} sm={12}>
        <Badge
          overlap="circle"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          variant="dot"
        >
          <Avatar alt={session.user.name} src={session.user.image} />
        </Badge>
        <div>
          {session.user.name} -{" "}
          <a
            style={{ color: "blue" }}
            onClick={async () =>
              await signOut({
                callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/#sectionCitas`,
              })
            }
          >
            <FontAwesomeIcon fixedWidth size="sm" icon={faSignOutAlt} /> Salir
          </a>
        </div>
        <div style={{ fontSize: "10px" }}>{session.user.email}</div>
        <div style={{ marginTop: "10px" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={props.handleNext}
          >
            Siguiente
          </Button>
        </div>
      </Col>
    </Row>
  );
};

SingnIn.propTypes = {};

export default SingnIn;
