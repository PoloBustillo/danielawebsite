import Head from "next/head";
import React, { useState } from "react";
import SectionHome from "components/SectionHome";
import SectionResume from "components/SectionResume";
import SideMenu from "components/SideMenu";
import StickyBar from "components/StickyBar";
import SectionServices from "components/SectionServices";
import axios from "axios";

export default function Home(props) {
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

      <SectionHome></SectionHome>
      <SectionServices terapias={props.terapias}></SectionServices>
      <SectionResume></SectionResume>
    </div>
  );
}

export const getStaticProps = async (context) => {
  try {
    const { data } = await axios.get(
      process.env.NEXT_PUBLIC_URL + "/api/tratamientos"
    );
    console.log(data);
    return {
      props: {
        terapias: data,
      },
    };
  } catch (error) {
    return {
      props: {
        terapias: [],
      },
    };
  }
};
