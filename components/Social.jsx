import React from "react";
import {
  faLinkedinIn,
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faAt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const mapStyles = {
  width: "100%",
  height: "30%",
};

const Social = (props) => {
  /* const MAPTILER_ACCESS_TOKEN = "";
  const MAP_ID = "toner";

  function mapTilerProvider(x, y, z, dpr) {
    return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${
      dpr >= 2 ? "@2x" : ""
    }.png?key=${MAPTILER_ACCESS_TOKEN}`;
  } */
  return (
    <div className="social-container">
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.323223481286!2d-98.24784688509992!3d19.00547368712844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x33f973c342c5addd!2sPsic%C3%B3logo%20Daniela%20Diaz%20Merino%20-%20Puebla%20-%20Terapia!5e0!3m2!1sen!2smx!4v1612124170876!5m2!1sen!2smx"
        frameBorder="0"
        style={{ border: "0", height: "35vh", width: "40vw" }}
        allowFullScreen={false}
        aria-hidden="false"
        tabIndex="0"
      ></iframe> */}
      <Link href={`tel:${props.telefono}`}>
        <div>
          <FontAwesomeIcon fixedWidth size="1x" icon={faPhoneAlt} />
          22&middot;11&middot;16&middot;58&middot;66
        </div>
      </Link>
      <div className="icons-container">
        <span id="social-icon">
          <a href={props.redes.linkedin} target="_blank">
            <FontAwesomeIcon fixedWidth size="1x" icon={faLinkedinIn} />
          </a>
        </span>
        <span id="social-icon">
          <a href={`mailto:${props.email}`} target="_blank">
            <FontAwesomeIcon fixedWidth size="1x" icon={faAt} />
          </a>
        </span>
        <span id="social-icon">
          <a href={props.redes.facebook} target="_blank">
            <FontAwesomeIcon fixedWidth size="1x" icon={faFacebook} />
          </a>
        </span>
        <span id="social-icon">
          <a href={props.redes.instagram} target="_blank">
            <FontAwesomeIcon fixedWidth size="1x" icon={faInstagram} />
          </a>
        </span>
        <span id="social-icon">
          <a href={props.redes.whatsapp} target="_blank">
            <FontAwesomeIcon fixedWidth size="1x" icon={faWhatsapp} />
          </a>
        </span>
      </div>
      <div className="contact-data">
        {/*<Map
          provider={mapTilerProvider}
          defaultCenter={[19.00571, -98.24586]}
          defaultZoom={12}
          defaultWidth={400}
          height={180}
          defaultZoom={17}
        >
          <Marker
            anchor={[19.00571, -98.24586]}
            payload={1}
            onClick={({ event, anchor, payload }) => {}}
          />

          <Overlay anchor={[50.879, 4.6997]} offset={[120, 79]}>
            <img src="/corgiParticles3.png" width={50} height={50} alt="" />
          </Overlay>
        </Map>*/}
      </div>

      <style jsx>{`
        #social-icon a svg {
          color: #212529 !important;
        }
        #social-icon:hover {
          color: #48a9a6 !important;
        }
        #social-icon:active {
          cursor: grabbing;
        }
        .social-container {
          color: #212529 !important;
          position: absolute;
          margin: auto;
          padding: 0;
          width: 96%;
          bottom: 0;
        }
        .social-container:hover {
          color: #48a9a6 !important;
          position: absolute;
          margin: auto;
          padding: 0;
          width: 96%;
          bottom: 0;
        }
        .contact-data {
          font-family: "Open Sans Condensed", sans-serif;
          position: realtive;
        }
        .icons-container {
          bottom: 5%;
          color: #212529 !important;
          position: realtive;
          left: 10%;
          font-size: 3vmax;
          margin: 20px 0;
          font-size: 30px;
        }
      `}</style>
    </div>
  );
};

export default Social;
