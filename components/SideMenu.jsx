import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import {
  faHome,
  faCalendarAlt,
  faFilm,
  faPeopleArrows,
  faPersonWalking,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Social from "./Social";
import LazyLoad from "react-lazyload";
import { ListGroup, NavDropdown } from "react-bootstrap";
import NotMobile from "./NotMobile";
import ParticleImage from "react-particle-image";
import { motionForce, particleOptions } from "../utils/particles";
import { useSession, signIn, signOut } from "next-auth/react";

const SideMenu = (props) => {
  const { data: session, status } = useSession();

  let iconComponent =
    status !== "authenticated" ? (
      <a className="menu-item">
        <FontAwesomeIcon icon={faPersonWalking} /> Usuarios
      </a>
    ) : (
      <img
        src={session?.user.image}
        width="30"
        height="30"
        className="align-top"
        alt="Perfil"
      />
    );
  const [style, setStyle] = useState({
    display: "none",
  });
  const [style2, setStyle2] = useState({
    display: "block",
    margin: "auto",
  });
  const changeMenu = () => {
    props.setOpen(!props.isOpen);
    return props.isOpen;
  };

  return (
    <Menu
      onClose={() => changeMenu()}
      isOpen={props.isOpen}
      customCrossIcon={false}
      disableAutoFocus
      customBurgerIcon={false}
    >
      <LazyLoad>
        <div>
          <img
            style={style2}
            src="/logo500.webp"
            width="100"
            height="100"
            className="align-top"
            alt="Logo Servicios Psicológicos"
            onMouseEnter={(e) => {
              setStyle({
                display: "block",
                margin: "auto",
              });
              setStyle2({ display: "none" });
            }}
          />
          <ParticleImage
            onMouseLeave={(e) => {
              setStyle({ display: "none" });
              setStyle2({
                display: "block",
                margin: "auto",
              });
            }}
            style={style}
            src={"/logo100.png"}
            width={100}
            height={100}
            scale={1}
            entropy={0}
            maxParticles={3000}
            particleOptions={particleOptions}
            mouseMoveForce={motionForce}
          />
        </div>

        <div className="menu-container">
          <ListGroup variant="flush">
            <ListGroup.Item
              style={{ cursor: "pointer", backgroundColor: "#FEFDFB" }}
            >
              <Link shallow href="/#sectionHome">
                <a
                  href="/#sectionHome"
                  className="menu-item"
                  onClick={() => props.setOpen(false)}
                >
                  <FontAwesomeIcon icon={faHome} /> Inicio
                </a>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              <NavDropdown drop={"right"} title={iconComponent}>
                {status === "authenticated" ? (
                  <>
                    <NavDropdown.Item href="/perfil">{`Perfil de ${session?.user.name}`}</NavDropdown.Item>
                    <NavDropdown.Divider />
                  </>
                ) : (
                  <></>
                )}

                {status !== "authenticated" ? (
                  <>
                    <NavDropdown.Item
                      onClick={() => {
                        signIn("google", { callbackUrl: "/perfil" });
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
                    <NavDropdown.Item
                      onClick={() => {
                        signIn("facebook", { callbackUrl: "/perfil" });
                      }}
                    >
                      <span id="social-icon" className="margin-auto">
                        <FontAwesomeIcon
                          fixedWidth
                          size="1x"
                          icon={faFacebook}
                        />
                      </span>
                      {"  "}
                      <span id="social-icon" className="margin-auto">
                        Facebook
                      </span>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        signIn("instagram", { callbackUrl: "/perfil" });
                      }}
                    >
                      <span id="social-icon" className="margin-auto">
                        <FontAwesomeIcon
                          fixedWidth
                          size="1x"
                          icon={faInstagram}
                        />
                      </span>
                      {"  "}
                      <span id="social-icon" className="margin-auto">
                        Instagram
                      </span>
                    </NavDropdown.Item>
                  </>
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
            </ListGroup.Item>
            <ListGroup.Item
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
                props.setOpen(false);
              }}
              className="menu-item"
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faCalendarAlt} /> Citas
            </ListGroup.Item>

            <ListGroup.Item style={{ cursor: "pointer" }}>
              <Link id="contact" className="menu-item" href="/blogs">
                <a className="menu-item" onClick={() => props.setOpen(false)}>
                  <FontAwesomeIcon icon={faFilm} /> Blog
                </a>
              </Link>
            </ListGroup.Item>

            <ListGroup.Item>
              <NavDropdown
                drop={"right"}
                title={
                  <a className="menu-item" onClick={() => props.setOpen(false)}>
                    <FontAwesomeIcon icon={faPeopleArrows} /> Terapias
                  </a>
                }
              >
                {props.terapias.map((area) => {
                  return (
                    <NavDropdown
                      alignRight
                      drop={"right"}
                      color="#9B287B"
                      title={area.Nombre}
                      id="navbarScrollingDropdown"
                    >
                      {area.tipos_terapias.map((terapia) => {
                        return (
                          <NavDropdown.Item
                            href={`/terapia/${terapia.Nombre.replace(
                              /\s+/g,
                              "_"
                            )}`}
                          >
                            {terapia.Nombre}
                          </NavDropdown.Item>
                        );
                      })}
                    </NavDropdown>
                  );
                })}
              </NavDropdown>
            </ListGroup.Item>
          </ListGroup>
          <Social></Social>
        </div>
      </LazyLoad>
    </Menu>
  );
};

export default SideMenu;
