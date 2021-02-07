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
      process.env.NEXT_SERVER_CMS_URL + "servicios"
    );
    const dataMapped = data.map((tratamiento) => {
      if (tratamiento.habilitado)
        return {
          contenido: tratamiento.Descripcion,
          tipoTerapia: tratamiento.Subtitulo,
          terapiaCategoria: tratamiento.Titulo,
          precio: tratamiento.costo,
          id: tratamiento.id,
          imagen: tratamiento.Imagen[0]?.formats.medium
            ? tratamiento.Imagen[0].formats.medium.url
            : tratamiento.Imagen[0].url,
        };
    });
    return {
      props: {
        terapias: dataMapped,
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: {
        terapias: [],
      },
    };
  }
};
