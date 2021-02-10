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

      <SectionHome slogan={props.slogan}></SectionHome>
      <SectionServices terapias={props.terapias}></SectionServices>
      <SectionResume></SectionResume>
    </div>
  );
}

export const getStaticProps = async (context) => {
  try {
    const slogan = await axios.get(process.env.NEXT_SERVER_CMS_URL + "slogan");
    const { data } = await axios.get(
      process.env.NEXT_SERVER_CMS_URL + "tipos-terapias"
    );
    console.log("DATA", data);
    const dataMapped = data.reduce(function (filtered, tratamiento) {
      if (tratamiento.published_at) {
        var someNewValue = {
          contenido: "revisar",
          tipoTerapia: tratamiento.Nombre,
          terapiaCategoria: tratamiento.areas.map((area) => {
            return area.Nombre;
          }),
          precio: tratamiento.Contenido[0].Costo,
          id: tratamiento.id,
          imagen: tratamiento.Contenido[0].Imagen?.url,
        };
        filtered.push(someNewValue);
      }
      return filtered;
    }, []);
    console.log("DATAMAPPED", dataMapped);
    return {
      props: {
        terapias: dataMapped,
        slogan: slogan?.data.Texto,
      },
      revalidate: 30,
    };
  } catch (error) {
    console.log("ERROR", error);
    return {
      props: {
        terapias: [],
        slogan: "UNA VIDA SALUDABLE EMPIEZA CON UNA MENTE SALUDABLE",
      },
      revalidate: 30,
    };
  }
};
