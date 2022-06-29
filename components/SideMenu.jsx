import React from "react";
import { stack as Menu } from "react-burger-menu/lib/menus/stack";
import Link from "next/link";
import {
  faHome,
  faCalendarAlt,
  faFilm,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Social from "./Social";
import LazyLoad from "react-lazyload";

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
      width="50vw"
    >
      <LazyLoad>
        <div className="menu-container">
          <Link id="home" shallow href="/#sectionHome">
            <a
              href="/#sectionHome"
              onClick={() => props.setOpen(false)}
              className="bm-item menu-item "
            >
              <FontAwesomeIcon icon={faHome} /> Inicio
            </a>
          </Link>

          <span
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
            className="bm-item menu-item"
          >
            <FontAwesomeIcon icon={faCalendarAlt} /> Citas
          </span>

          <Link id="contact" className="menu-item" href="/blogs">
            <a
              onClick={() => props.setOpen(false)}
              className="bm-item menu-item"
            >
              <FontAwesomeIcon icon={faFilm} /> Blog
            </a>
          </Link>
          <Link className="menu-item" shallow href="/#sectionServices">
            <a
              onClick={() => props.setOpen(false)}
              className="bm-item menu-item"
            >
              <FontAwesomeIcon icon={faPeopleArrows} /> Terapias
            </a>
          </Link>
        </div>
        <Social></Social>
      </LazyLoad>
    </Menu>
  );
};

export default SideMenu;
