import React from "react";
import { bubble as Menu } from "react-burger-menu";
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
      <Link id="home" href="/">
        <a
          onClick={() => props.setOpen(false)}
          className="bm-item menu-item element-animation"
        >
          <FontAwesomeIcon icon={faHome} /> Home
        </a>
      </Link>
      <Link Link id="about" className="menu-item element-animation" href="/">
        <a
          onClick={() => props.setOpen(false)}
          className="bm-item menu-item element-animation"
        >
          <FontAwesomeIcon icon={faCalendarAlt} /> Citas
        </a>
      </Link>
      <Link id="contact" className="menu-item element-animation" href="/">
        <a
          onClick={() => props.setOpen(false)}
          className="bm-item menu-item element-animation"
        >
          <FontAwesomeIcon icon={faFilm} /> Recursos
        </a>
      </Link>
      <Link className="menu-item element-animation" href="/">
        <a
          onClick={() => props.setOpen(false)}
          className="bm-item menu-item element-animation"
        >
          <FontAwesomeIcon icon={faPeopleArrows} /> Servicios
        </a>
      </Link>

      <Social></Social>
    </Menu>
  );
};

export default SideMenu;
