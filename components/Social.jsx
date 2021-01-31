import React from "react";
import {
  faLinkedinIn,
  faFacebookMessenger,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "30%",
};

const Social = (props) => {
  console.log(props);
  return (
    <div className="social-container">
      <Link href="https://fontawesome.com/how-to-use/on-the-web/using-with/react">
        <FontAwesomeIcon fixedWidth size="2x" icon={faLinkedinIn} />
      </Link>
      <Link href="/">
        <FontAwesomeIcon fixedWidth size="2x" icon={faAt} />
      </Link>
      <Link href="/">
        <FontAwesomeIcon fixedWidth size="2x" icon={faFacebookMessenger} />
      </Link>
      <Link href="/">
        <FontAwesomeIcon fixedWidth size="2x" icon={faInstagram} />
      </Link>
      <Link href="/">
        <FontAwesomeIcon fixedWidth size="2x" icon={faWhatsapp} />
      </Link>
      <div className="contact-data">
        Consultorio: Colonia ex-Rancho Vaquerias
        <Map
          google={props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: -1.2884,
            lng: 36.8233,
          }}
        />
      </div>
      <style jsx>{`
        .socialContainer {
          color: #aaa;
        }
        .contact-data {
          font-family: "Open Sans Condensed", sans-serif;
        }
      `}</style>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDNt3UlPcC7doZjPZCnHI95QfU6hbIisDM",
})(Social);
