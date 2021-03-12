import Head from "next/head";
import { NextSeo, LocalBusinessJsonLd } from "next-seo";
import { useRouter } from "next/router";
import { fetchAPI } from "../lib/api";
import React, { useState } from "react";
import SectionHome from "components/SectionHome";
import SideMenu from "components/SideMenu";
import StickyBar from "components/StickyBar";
import SectionServices from "components/SectionServices";
import SectionFAQ from "../components/SectionFAQ";
import SectionCitas from "../components/SectionCitas";
import CardBlog from "../components/CardBlog";
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
      <LocalBusinessJsonLd
        type="Store"
        id="http://psic-danieladiaz.com"
        name="Psicologo en Puebla Daniela Diaz Merino"
        description="Psicólogo en Puebla para diversas terapias y talleres - Terapia comunitaria ayudando a precios accesibles - Profesionalismo - Contenido enfocado a la psicología - Ayuda psicológica para jóvenes, adultos y niños."
        url="http://psic-danieladiaz.com/#sectionServices"
        telephone="2211165866"
        priceRange="150 - 300"
        address={{
          streetAddress:
            "Mártires del 2 de Octubre, Reserva Territorial Atlixcáyotl, Ex-Rancho Vaquerías.",
          addressLocality: "Puebla",
          addressRegion: "Puebla",
          postalCode: "72464",
          addressCountry: "MX",
        }}
        geo={{
          latitude: "19.00596091031922",
          longitude: "-98.24550779630408",
        }}
        images={[
          "https://example.com/photos/1x1/photo.jpg",
          "https://example.com/photos/4x3/photo.jpg",
          "https://example.com/photos/16x9/photo.jpg",
        ]}
        sameAs={[
          "www.company-website-url1.dev",
          "www.company-website-url2.dev",
          "www.company-website-url3.dev",
        ]}
        openingHours={[
          {
            opens: "08:00",
            closes: "18:00",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            validFrom: "2019-12-23",
            validThrough: "2028-04-02",
          },
        ]}
      />
      <NextSeo
        title="Psicólogo Puebla - Terapias - Talleres "
        description="Psicólogo en Puebla para diversas terapias y talleres - Terapia comunitaria ayudando a precios accesibles - Profesionalismo - Contenido enfocado a la psicología - Ayuda psicológica para jóvenes, adultos y niños."
        facebook={{
          appId: "430433931632815",
        }}
        openGraph={{
          type: "website",
          url: "https://www.psic-danieladiaz.com/",
          title: "Psicologa en Puebla",
          description:
            "Psicólogo en Puebla para diversas terapias y talleres - Terapia comunitaria ayudando a precios accesibles - Profesionalismo - Contenido enfocado a la psicología - Ayuda psicológica para jóvenes, adultos y niños.",
          images: [
            {
              url: "https://www.psic-danieladiaz.com/logo500.webp",
              width: 500,
              height: 500,
              alt: "Psicologo Daniela Diaz Logo",
            },
            {
              url:
                "https://storage.googleapis.com/danielawebsite.appspot.com/1107a6fe_8609_438a_a764_81f0f3567fc9_0ac38050f9.jpg?GoogleAccessId=firebase-adminsdk-jk35c%40danielawebsite.iam.gserviceaccount.com&Expires=16730323200&Signature=srsM%2BNRZz84bMRTo8JwV69DCoQjkD%2FnDObfiZI8bv2voQo13IypNv%2Fakmo22mAN%2BUNAAc34K6h9GCACAhO7xO%2Bcg5cr8HQMB%2B2%2BLovcQpgm4y9X32wt3M79Qrp17%2BLDF2OfCaWXKZ0qhmGNM6k3DLwN716PGT4zzjk5IUDv%2FkEcMv0weYasnqXEHXxvtBivxa%2Bfkp1DnPjvhn92bbD838wS%2Ftag8HbSgEAoWd8bC1G1WO%2B9F4blrOSrf5UISatHj%2F%2By6v6HKkuRJOFaUxW8tcQQu0j%2FzmbqYZdJdfaVEQgVzpzb2S8awJP9aGu%2B2Sl6jSwIC4DHeUBUVxPsLLgFLgA%3D%3D&safewithFileCaching=dummyValue",
              width: 800,
              height: 600,
              alt: "Terapias en Puebla ",
            },
          ],
        }}
      />
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
        <img src="/bannerAgendar.png" alt="Agendar Cita Psicologo Puebla"></img>
      </div>
      {/*
      <SectionCitas
        areas={props.areas}
        terapias={filterData()}
        setFilter={setFilter}
      ></SectionCitas>*/}
      <SectionFAQ preguntas={props.preguntas} />
      {/*<div style={{ height: "800px" }}>
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
        </div>*/}

      <script
        dangerouslySetInnerHTML={{
          __html: `var widget = new SimplybookWidget({"widget_type":"button","url":"https:\/\/psicdaniela.simplybook.me","theme":"bookingtroll","theme_settings":{"timeline_hide_unavailable":"0","timeline_show_end_time":"0","timeline_modern_display":"as_slots","sb_base_color":"#0a3d65","display_item_mode":"list","sb_review_image":"6","sb_review_image_preview":"\/uploads\/psicdaniela\/image_files\/preview\/801453c79c2bc1a14c066ad82b046c55.png","dark_font_color":"#262020","light_font_color":"#ecf0f9","btn_color_1":"#ffa64c","sb_company_label_color":"#ffffff","hide_img_mode":"0","sb_busy":"#f57070","sb_available":"#f7faff"},"timeline":"modern","datepicker":"top_calendar","is_rtl":false,"app_config":{"allow_switch_to_ada":0,"predefined":[]},"button_title":"Reserva tu cita ","button_background_color":"#009cff","button_text_color":"#ffffff","button_position":"right","button_position_offset":"55%"});
          `,
        }}
      />
      {/*<CardBlog></CardBlog>*/}
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
