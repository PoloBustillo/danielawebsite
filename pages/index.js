import Head from "next/head";
import React, { useState } from "react";
import SectionHome from "components/SectionHome";
import SectionResume from "components/SectionResume";
import SideMenu from "components/SideMenu";
import StickyBar from "components/StickyBar";
import SectionServices from "components/SectionServices";
require("disable-react-devtools");
import axios from "axios";

export default function Home(props) {
  const [color, setColor] = useState();
  const [isOpen, setOpen] = useState(false);
  const [filter, setFilter] = useState("");

  const filterData = () => {
    let terapiasFiltered = props.terapias;
    if (filter !== "") {
      terapiasFiltered = props.terapias.filter((data) => {
        return data.Nombre === filter;
      });
    }
    return terapiasFiltered;
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

      <SectionHome slogan={props.slogan}></SectionHome>
      <SectionServices
        areas={props.areas}
        terapias={filterData()}
        setFilter={setFilter}
      ></SectionServices>
      <SectionResume></SectionResume>
    </div>
  );
}

export const getStaticProps = async (context) => {
  try {
    const slogan = await axios.get(process.env.NEXT_SERVER_CMS_URL + "slogan");
    const { data } = await axios.get(process.env.NEXT_SERVER_CMS_URL + "areas");
    return {
      props: {
        areas: data.map((area) => {
          return area.Nombre;
        }),
        terapias: data,
        slogan: slogan?.data.Texto,
      },
      revalidate: 30,
    };
  } catch (error) {
    console.log("ERROR", error);
    return {
      props: {
        areas: [],
        terapias: [],
        slogan: "UNA VIDA SALUDABLE EMPIEZA CON UNA MENTE SALUDABLE",
      },
      revalidate: 30,
    };
  }
};
