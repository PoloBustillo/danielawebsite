import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Divide as Hamburger } from "hamburger-react";
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import Link from "next/link";
import { faUsersLine } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faFacebook,
  faInstagram,
  faWhatsapp,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { faAt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StickyBar = ({ color = "rgba(29,181,120)", setOpenMenu, isMenuOpen }) => {
  const [isOpen, setOpen] = useState(isMenuOpen);
  const { data: session, status } = useSession();

  let iconComponent =
    status !== "authenticated" ? (
      <FontAwesomeIcon size="xl" color="#9B287B" icon={faUsersLine} />
    ) : (
      <img
        src={session?.user.image}
        width="30"
        height="30"
        className="align-top"
        alt="Perfil"
      />
    );
  return (
    <Navbar
      sticky="top"
      expand="xs"
      style={{
        WebkitBackdropFilter: "blur(8px)",
        backdropFilter: "blur(8px)",
      }}
      color="#FEFDFB"
    >
      <Container>
        <Navbar.Brand href="#">
          <div className="logo">
            <img
              src="/logo500.webp"
              width="70"
              height="70"
              className="align-top"
              alt="Logo Servicios Psicológicos"
            />
          </div>
        </Navbar.Brand>

        <Col className="heroButtonContainer sectionButtonsContainer my-auto">
          <a
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
            Citas
          </a>
        </Col>
        <Col className="heroButtonContainer sectionButtonsContainer my-auto">
          <Link href="/instituciones">Instituciones</Link>
        </Col>
        <Col className="heroButtonContainer sectionButtonsContainer my-auto">
          <Link href="/#sectionServices">Servicios</Link>
        </Col>

        <NavDropdown
          color="#9B287B"
          title={iconComponent}
          id="navbarScrollingDropdown"
        >
          {status === "authenticated" ? (
            <>
              <NavDropdown.Item href="/perfil">{`Perfil de ${session?.user.name}`}</NavDropdown.Item>
              <NavDropdown.Divider />
            </>
          ) : (
            <></>
          )}

          {status !== "authenticated" ? (
            <NavDropdown.Item
              onClick={() => {
                signIn("google");
              }}
            >
              <span id="social-icon" className="margin-auto">
                <FontAwesomeIcon fixedWidth size="1x" icon={faGoogle} />
              </span>
              {"  "}
              <span id="social-icon" className="margin-auto">
                Google
              </span>
            </NavDropdown.Item>
          ) : (
            <></>
          )}
          {status === "authenticated" ? (
            <NavDropdown.Item
              onClick={() => {
                signOut();
              }}
            >
              <span id="social-icon">Salir</span>
            </NavDropdown.Item>
          ) : (
            <></>
          )}
        </NavDropdown>
        <Hamburger
          duration={1}
          toggled={isMenuOpen}
          toggle={() => {
            setOpenMenu(!isMenuOpen);
            setOpen(!isMenuOpen);
          }}
        />
      </Container>
    </Navbar>
  );
};

StickyBar.propTypes = {};

export default StickyBar;
