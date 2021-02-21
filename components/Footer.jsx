import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const Footer = () => {
  return (
    <div id="sectionFooter">
      <h1 className="section-title">Footer</h1>
      Footer
      <style jsx>{`
        #sectionFooter {
          margin-top: -7vh;
          background-color: rgba(41, 47, 69, 0.96);
        }
        .section-title {
          font-family: "Anton", sans-serif;
          color: white;
          align-items: center;
          font-size: 15vw;
          padding-top: 20vh;
          text-align: center;
          margin-block-end: 0;
        }
      `}</style>
    </div>
  );
};

export default Footer;
