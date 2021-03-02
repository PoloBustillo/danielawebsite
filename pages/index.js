import Head from "next/head";
import { useRouter } from "next/router";
import { fetchAPI } from "../lib/api";
import React, { useState } from "react";
import SectionHome from "components/SectionHome";
import SideMenu from "components/SideMenu";
import StickyBar from "components/StickyBar";
import SectionServices from "components/SectionServices";
import SectionFAQ from "../components/SectionFAQ";
import SectionCitas from "../components/SectionCitas";
import Footer from "../components/Footer";
import { useSession, signIn, signOut } from "next-auth/client";

export default function Home(props) {
  const [color, setColor] = useState();
  const [isOpen, setOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [session, loading] = useSession();
  console.log(session, loading);
  const router = useRouter();

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
      <div id="banner">
        <img src="/bannerAgendar.png" alt="Banner"></img>
      </div>
      <SectionCitas
        areas={props.areas}
        terapias={filterData()}
        setFilter={setFilter}
      ></SectionCitas>
      <SectionFAQ preguntas={props.preguntas} />
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={async () => await signOut({ callbackUrl: "/foo" })}>
            Sign out
          </button>
        </>
      )}
      <button
        onClick={async () => {
          const data = await signIn("google", {
            redirect: false,
          });
          router.push("/citas");
        }}
      >
        Sign in with Google
      </button>
      <Footer sitios={props.sitios}></Footer>
    </div>
  );
}

export const getStaticProps = async (context) => {
  try {
    const [slogan, areas, preguntas, footer] = await Promise.all([
      fetchAPI("slogan"),
      fetchAPI("areas"),
      fetchAPI("preguntas"),
      fetchAPI("footer"),
    ]);

    return {
      props: {
        areas: areas.map((area) => {
          return area.Nombre;
        }),
        terapias: areas,
        slogan: slogan.Texto,
        preguntas: preguntas.Pregunta,
        sitios: footer?.SitiosAfines,
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
