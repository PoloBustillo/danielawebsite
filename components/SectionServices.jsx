import React from "react";
import PropTypes from "prop-types";

const SectionServices = (props) => {
  return (
    <div id="sectionServices">
      <h1 className="section-title header ">
        <div>Servicios Psicologicos </div>
        <div>para</div> la Comunidad
      </h1>
      <style jsx>{`
        #sectionServices {
          margin-top: -7vh;
          background-color: #1d1f20;
          height: 1000px;
        }
        .section-title {
          padding-top: 20vh;
          text-align: center;
          margin-block-end: 0;
        }
      `}</style>
    </div>
  );
};

SectionServices.propTypes = {};

export default SectionServices;
