import React from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import {
  faHome,
  faCalendarAlt,
  faFilm,
  faPeopleArrows,
  faSignInAlt,
  faSignIn,
  faUserAltSlash,
  faUserAlt,
  faPersonWalking,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Social from "./Social";
import LazyLoad from "react-lazyload";
import { ListGroup } from "react-bootstrap";

const SideMenu = (props) => {
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
        <div className="menu-container">
          <ListGroup variant="flush">
            <ListGroup.Item style={{ cursor: "pointer" }}>
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
              <Link id="contact" href="/blogs">
                <a className="menu-item" onClick={() => props.setOpen(false)}>
                  <FontAwesomeIcon icon={faPersonWalking} /> Usuarios
                </a>
              </Link>
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
              <Link shallow href="/#sectionServices">
                <a className="menu-item" onClick={() => props.setOpen(false)}>
                  <FontAwesomeIcon icon={faPeopleArrows} /> Terapias
                </a>
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </div>
        <Social></Social>
      </LazyLoad>
    </Menu>
  );
};

export default SideMenu;
