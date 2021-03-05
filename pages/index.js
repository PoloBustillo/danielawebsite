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
        <script
          dangerouslySetInnerHTML={{
            __html: `var widget = new SimplybookWidget({"widget_type":"button","url":"https:\/\/psicdaniela.simplybook.me","theme":"bookingtroll","theme_settings":{"timeline_hide_unavailable":"0","timeline_show_end_time":"0","timeline_modern_display":"as_slots","sb_base_color":"#009cff","display_item_mode":"block","sb_review_image":"","dark_font_color":"#2d3a58","light_font_color":"#ffffff","btn_color_1":"#ff3f6c","sb_company_label_color":"#ffffff","hide_img_mode":"0","sb_busy":"#dad2ce","sb_available":"#d3e0f1"},"timeline":"modern","datepicker":"top_calendar","is_rtl":false,"app_config":{"allow_switch_to_ada":0,"predefined":[]},"button_title":"Reservar ahora","button_background_color":"#009cff","button_text_color":"#ffffff","button_position":"right","button_position_offset":"55%"});
`,
          }}
        />
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
      <div style={{ height: "800px" }}>
        <iframe
          src="https://calendly.com/psic-danieladiazmerino"
          width="100%"
          height="100%"
          frameborder="0"
        ></iframe>
      </div>
      <div style={{ height: "800px" }}>
        <iframe
          src="https://psicdanieladiaz.setmore.com/"
          scrolling="yes"
          width="100%"
          height="100%"
          frameborder="0"
        ></iframe>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `var widget = new SimplybookWidget({"widget_type":"button","url":"https:\/\/psicdaniela.simplybook.me","theme":"bookingtroll","theme_settings":{"timeline_hide_unavailable":"0","timeline_show_end_time":"0","timeline_modern_display":"as_slots","sb_base_color":"#009cff","display_item_mode":"block","sb_review_image":"","dark_font_color":"#2d3a58","light_font_color":"#ffffff","btn_color_1":"#ff3f6c","sb_company_label_color":"#ffffff","hide_img_mode":"0","sb_busy":"#dad2ce","sb_available":"#d3e0f1"},"timeline":"modern","datepicker":"top_calendar","is_rtl":false,"app_config":{"allow_switch_to_ada":0,"predefined":[]},"button_title":"Reservar ahora","button_background_color":"#009cff","button_text_color":"#ffffff","button_position":"right","button_position_offset":"55%"});
`,
        }}
      />
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
