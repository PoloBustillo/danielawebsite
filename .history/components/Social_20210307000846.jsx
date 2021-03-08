import React from "react";
import {
  faLinkedinIn,
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.323223481286!2d-98.24784688509992!3d19.00547368712844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x33f973c342c5addd!2sPsic%C3%B3logo%20Daniela%20Diaz%20Merino%20-%20Puebla%20-%20Terapia!5e0!3m2!1sen!2smx!4v1612124170876!5m2!1sen!2smx"
        frameBorder="0"
        style={{ border: "0", height: "35vh", width: "40vw" }}
        allowFullScreen={false}
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
      <div className="icons-container">
        <span id="social-icon">
          <Link href="https://linkedin.com/in/daniela-diaz-408967144">
            <FontAwesomeIcon fixedWidth size="1x" icon={faLinkedinIn} />
          </Link>
        </span>
        <span id="social-icon">
          <Link href="mailto:danieladimersic@gmail.com">
            <FontAwesomeIcon fixedWidth size="1x" icon={faAt} />
          </Link>
        </span>
        <span id="social-icon">
          <Link href="https://www.facebook.com/PsicoterapiaDiazMer">
            <FontAwesomeIcon fixedWidth size="1x" icon={faFacebook} />
          </Link>
        </span>
        <span id="social-icon">
          <Link href="https://www.instagram.com/psic_danieladiazm/">
            <FontAwesomeIcon fixedWidth size="1x" icon={faInstagram} />
          </Link>
        </span>
        <span id="social-icon">
          <Link href="https://wa.me/5212211165866?text=Hola%20Psic.%20Daniela%20quisiera%20información%20acerca%20de:">
            <FontAwesomeIcon fixedWidth size="1x" icon={faWhatsapp} />
          </Link>
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
        #social-icon:hover {
          color: rgba(29, 181, 120, 0.8);
        }
        #social-icon:active {
          cursor: grabbing;
        }
        .social-container {
          color: #aaa;
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
          color: white;
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
