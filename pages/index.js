import Head from "next/head";
import React, { useState } from "react";
import SectionHome from "components/SectionHome";
import dynamic from "next/dynamic";

import SideMenu from "../components/SideMenu";
import StickyBar from "../components/StickyBar";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
const ReactScrollDetect = dynamic(
  () => {
    return import("react-scroll-detect");
  },
  { ssr: false }
);
const DetectSection = dynamic(
  () => import("react-scroll-detect").then((mod) => mod.DetectSection),
  { ssr: false }
);
export default function Home() {
  const [color, setColor] = useState();
  const [isOpen, setOpen] = useState(false);

  const handleSectionChange = (section) => {
    switch (section) {
      case 1:
        setColor("white");
        break;
      default:
        setColor("white");
    }
  };
  return (
    <div className="container-fluid">
      <Head>
        <title>Pagina de Psicologo Daniela Diaz Merino</title>
      </Head>
      <SideMenu isOpen={isOpen} setOpen={setOpen}></SideMenu>
      <StickyBar
        isMenuOpen={isOpen}
        setOpenMenu={setOpen}
        color={color}
      ></StickyBar>
      <ReactScrollDetect triggerPoint="top" onChange={handleSectionChange}>
        <DetectSection>
          <SectionHome></SectionHome>
        </DetectSection>
        <DetectSection>
          <div id="section2" style={{ height: "900px" }}>
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
                <h3 className="vertical-timeline-element-title">
                  Creative Director
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Miami, FL
                </h4>
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
                <h3 className="vertical-timeline-element-title">
                  Creative Director
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Miami, FL
                </h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </DetectSection>
      </ReactScrollDetect>
      <style jsx>{`
        #section2 {
          background-color: rgba(0, 0, 0, 0.8);
        }
      `}</style>
    </div>
  );
}
