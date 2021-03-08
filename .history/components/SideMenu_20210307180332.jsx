import React from "react";
import { stack as Menu } from "react-burger-menu";
import Link from "next/link";
import {
  faHome,
  faCalendarAlt,
  faFilm,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Social from "./Social";

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
      <div className="menu-container">
        <Link
          id="home"
          className="bm-item menu-item"
          shallow
          href="/#sectionHome"
        >
          <>
            <FontAwesomeIcon
              icon={faHome}
              onClick={() => props.setOpen(false)}
            />{" "}
            Home
          </>
        </Link>
        <Link Link id="about" className="menu-item " href="/#citas">
          <a onClick={() => props.setOpen(false)} className="bm-item menu-item">
            <FontAwesomeIcon icon={faCalendarAlt} /> Citas
          </a>
        </Link>
        <Link id="contact" className="menu-item" href="/blogs">
          <a onClick={() => props.setOpen(false)} className="bm-item menu-item">
            <FontAwesomeIcon icon={faFilm} /> Recursos
          </a>
        </Link>
        <Link className="menu-item" shallow href="/#sectionServices">
          <a onClick={() => props.setOpen(false)} className="bm-item menu-item">
            <FontAwesomeIcon icon={faPeopleArrows} /> Servicios
          </a>
        </Link>
      </div>
      <Social></Social>
    </Menu>
  );
};

export default SideMenu;
