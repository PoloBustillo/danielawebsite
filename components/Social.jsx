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
import { Map, Marker, Overlay } from "pigeon-maps";
const mapStyles = {
  width: "100%",
  height: "30%",
};

const Social = (props) => {
  const MAPTILER_ACCESS_TOKEN = "dDN3ez3oCX5JE6lfSmrW";
  const MAP_ID = "toner";

  function mapTilerProvider(x, y, z, dpr) {
    return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${
      dpr >= 2 ? "@2x" : ""
    }.png?key=${MAPTILER_ACCESS_TOKEN}`;
  }
  return (
    <div className="social-container">
      <div className="contact-data">
        Consultorio: Colonia ex-Rancho Vaquerias
        <Map
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
        </Map>
      </div>
      <div className="icons-container">
        <Link href="https://fontawesome.com/how-to-use/on-the-web/using-with/react">
          <FontAwesomeIcon fixedWidth size="1x" icon={faLinkedinIn} />
        </Link>
        <Link href="/">
          <FontAwesomeIcon fixedWidth size="1x" icon={faAt} />
        </Link>
        <Link href="/">
          <FontAwesomeIcon fixedWidth size="1x" icon={faFacebookMessenger} />
        </Link>
        <Link href="/">
          <FontAwesomeIcon fixedWidth size="1x" icon={faInstagram} />
        </Link>
        <Link href="/">
          <FontAwesomeIcon fixedWidth size="1x" icon={faWhatsapp} />
        </Link>
      </div>

      <style jsx>{`
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
          color: rgb(178 178 178, 0.8);
          position: realtive;
          left: 10%;
          font-size: 3vmax;
        }
      `}</style>
    </div>
  );
};

export default Social;
