import Head from "next/head";
import React, { useState } from "react";
import SectionOne from "components/SectionOne";
import dynamic from "next/dynamic";
import SideMenu from "../components/SideMenu";
import StickyBar from "../components/StickyBar";
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
    console.log(section);
    switch (section) {
      case 1:
        setColor("black");
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
          <SectionOne></SectionOne>
        </DetectSection>
        <DetectSection>
          <div style={{ height: "900px" }}></div>
        </DetectSection>
      </ReactScrollDetect>
    </div>
  );
}
