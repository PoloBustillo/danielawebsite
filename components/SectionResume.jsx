import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const SectionResume = () => {
  return (
    <div id="sectionResume">
      <h1 className="section-title">Experiencia</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(33, 150, 243)",
          }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(33, 150, 243)",
          }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <style jsx>{`
        #sectionResume {
          margin-top: -7vh;
          background-color: rgb(0, 0, 0);
        }
        .section-title {
          font-family: "Anton", sans-serif;
          color: #346c3b;
          align-items: center;
          font-size: 17vw;
          padding-top: 20vh;
          text-align: center;
          margin-block-end: 0;
        }
      `}</style>
    </div>
  );
};

export default SectionResume;
