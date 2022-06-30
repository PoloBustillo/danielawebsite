import { NextSeo, LocalBusinessJsonLd } from "next-seo";
import { useRouter } from "next/router";
import { fetchAPI } from "../lib/api";
import React, { useState } from "react";
import SectionHome from "../components/SectionHome";
import SideMenu from "../components/SideMenu";
import StickyBar from "../components/StickyBar";
import SectionServices from "../components/SectionServices";
import SectionFAQ from "../components/SectionFAQ";
import Footer from "../components/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LazyLoad from "react-lazyload";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faBullhorn,
  faLocation,
  faLocationDot,
  faMap,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import { Divider } from "@material-ui/core";
import Link from "next/link";

const NotMobile = dynamic(() => import("../components/NotMobile"), {
  ssr: false,
});

export default function Home(props) {
  const [color, setColor] = useState();
  const [isOpen, setOpen] = useState(false);
  const [filter, setFilter] = useState("");

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
        name="Psicologo en Puebla -Terapias - Daniela Diaz Merino"
        description="Psicólogo en Puebla, diversas terapias (inviduales, pareja, grupales etc.) - especialidad en psicopedagogía - Terapia comunitaria a precios accesibles  - Contenido enfocado a la psicología - Ayuda psicológica para jóvenes, adultos y niños."
        url="http://psic-danieladiaz.com"
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
        images={["https://psic-danieladiaz.com/PsicologoPueblaAgendar.png"]}
        sameAs={[
          "https://www.facebook.com/PsicoterapiaDiazMer",
          "https://www.instagram.com/psic_danieladiazm/",
          "https://wa.me/5212211165866?text=Hola%20Psic.%20Daniela%20quisiera%20información%20acerca%20de:",
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
        title="Psicólogo Puebla - Terapias - Piscopedagogía - Precios accesibles"
        canonical="https://psic-danieladiaz.com/"
        description="Psicólogo en Puebla, diversas terapias (inviduales, pareja, grupales etc.)- especialidad en psicopedagogía - Terapia comunitaria a precios accesibles  - Contenido enfocado a la psicología - Ayuda psicológica para jóvenes, adultos y niños."
        facebook={{
          appId: "430433931632815",
        }}
        openGraph={{
          type: "website",
          url: "https://www.psic-danieladiaz.com/",
          title: "Psicologa en Puebla",
          description:
            "Psicólogo en Puebla, diversas terapias (inviduales, pareja, grupales etc.)- especialidad en psicopedagogía - Terapia comunitaria a precios accesibles  - Contenido enfocado a la psicología - Ayuda psicológica para jóvenes, adultos y niños.",
          images: [
            {
              url: "https://www.psic-danieladiaz.com/logo500.webp",
              width: 500,
              height: 500,
              alt: "Psicologo Daniela Diaz Logo",
            },
            {
              url: "https://storage.googleapis.com/danielawebsite.appspot.com/1107a6fe_8609_438a_a764_81f0f3567fc9_0ac38050f9.jpg?GoogleAccessId=firebase-adminsdk-jk35c%40danielawebsite.iam.gserviceaccount.com&Expires=16730323200&Signature=srsM%2BNRZz84bMRTo8JwV69DCoQjkD%2FnDObfiZI8bv2voQo13IypNv%2Fakmo22mAN%2BUNAAc34K6h9GCACAhO7xO%2Bcg5cr8HQMB%2B2%2BLovcQpgm4y9X32wt3M79Qrp17%2BLDF2OfCaWXKZ0qhmGNM6k3DLwN716PGT4zzjk5IUDv%2FkEcMv0weYasnqXEHXxvtBivxa%2Bfkp1DnPjvhn92bbD838wS%2Ftag8HbSgEAoWd8bC1G1WO%2B9F4blrOSrf5UISatHj%2F%2By6v6HKkuRJOFaUxW8tcQQu0j%2FzmbqYZdJdfaVEQgVzpzb2S8awJP9aGu%2B2Sl6jSwIC4DHeUBUVxPsLLgFLgA%3D%3D&safewithFileCaching=dummyValue",
              width: 800,
              height: 600,
              alt: "Terapias en Puebla ",
            },
          ],
        }}
      />
      <Row style={{ backgroundColor: "#A3D3D1" }}>
        <p
          className="m-auto py-4"
          style={{
            textAlign: "center",
            backgroundColor: "#A3D3D1",
            color: "#082D46",
            fontFamily: "Manrope,Helvetica,Arial,sans-serif",
            fontSize: ".8875rem",
          }}
        >
          <FontAwesomeIcon
            fixedWidth
            size="sm"
            icon={faBullhorn}
          ></FontAwesomeIcon>
          {"  "}
          Nueva caracteristica: Pacientes y Visitantes ya pueden iniciar sesión.
        </p>
      </Row>

      <SideMenu isOpen={isOpen} setOpen={setOpen}></SideMenu>

      <StickyBar
        isMenuOpen={isOpen}
        setOpenMenu={setOpen}
        color={color}
      ></StickyBar>

      <SectionHome slogan={props.slogan}></SectionHome>
      <Divider className="mx-10 my-3"></Divider>
      <Container>
        <Row>
          <Col
            className="px-5 my-auto col-md-7"
            style={{ textAlign: "center" }}
          >
            <h6
              style={{
                color: "#17364E",
                fontSize: "20px",
                marginBottom: "5vh",
              }}
            >
              <FontAwesomeIcon fixedWidth size="1x" icon={faBrain} />
              Psicologa Puebla/Teziutlan
            </h6>
            <div
              className="m-auto"
              style={{
                color: "#17364E",
                fontFamily: "WoodfordBournePRO",
                fonSize: "12px",
                lineHeight: "1.5",
                fontSize: "12px",
                fontWeight: "900",
              }}
            >
              <Link href="https://goo.gl/maps/kmrqWeGX3nQRaU8q7">
                <Row
                  className="m-auto"
                  style={{ textAlign: "justify", cursor: "pointer" }}
                >
                  <FontAwesomeIcon
                    style={{ fontSize: "60px", marginRight: "20px" }}
                    icon={faLocationDot}
                  ></FontAwesomeIcon>

                  <div>
                    <div>Mártires del 2 de Octubre</div>
                    <div>Reserva TerritorialAtlixcáyotl</div>
                    <div>Ex-Rancho Vaquerías, 72464</div>
                    Puebla, Pue.
                  </div>
                </Row>
              </Link>
              <Link href="tel:2211165866">
                <Row
                  className="m-auto"
                  style={{
                    textAlign: "justify",
                    float: "right",
                    cursor: "pointer",
                  }}
                >
                  <div>
                    <FontAwesomeIcon fixedWidth size="3x" icon={faPhoneAlt} />
                    <span className="my-auto">
                      22&middot;11&middot;16&middot;58&middot;66
                    </span>
                  </div>
                </Row>
              </Link>
            </div>
          </Col>
          <Col className="mx-auto my-auto" style={{ textAlign: "center" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.323223481286!2d-98.24784688509992!3d19.00547368712844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x33f973c342c5addd!2sPsic%C3%B3logo%20Daniela%20Diaz%20Merino%20-%20Puebla%20-%20Terapia!5e0!3m2!1sen!2smx!4v1612124170876!5m2!1sen!2smx"
              frameBorder="0"
              style={{ border: "0", height: "35vh" }}
              allowFullScreen={false}
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </Col>
        </Row>
      </Container>
      <LazyLoad offset={100}>
        <SectionServices
          areas={props.areas}
          terapias={filterData()}
          setFilter={setFilter}
        ></SectionServices>
      </LazyLoad>
      <div id="banner">
        <LazyLoadImage
          effect="blur"
          title="Pasos para agendar cita terapia en Puebla"
          src="/psicologo_puebla_agendar.png"
          alt="Agendar Cita Psicologo Puebla"
        />
      </div>

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
      {/*<CardBlog></CardBlog>*/}
      <LazyLoad offset={100}>
        <Footer sitios={props.sitios}></Footer>
      </LazyLoad>
      <script
        dangerouslySetInnerHTML={{
          __html: `var widget = new SimplybookWidget({"widget_type":"button","url":"https:\/\/psicdaniela.simplybook.me","theme":"bookingtroll","theme_settings":{"timeline_hide_unavailable":"0","timeline_show_end_time":"0","timeline_modern_display":"as_slots","sb_base_color":"#0a3d65","display_item_mode":"list","sb_review_image":"6","sb_review_image_preview":"\/uploads\/psicdaniela\/image_files\/preview\/801453c79c2bc1a14c066ad82b046c55.png","dark_font_color":"#262020","light_font_color":"#ecf0f9","btn_color_1":"#ffa64c","sb_company_label_color":"#ffffff","hide_img_mode":"0","sb_busy":"#f57070","sb_available":"#f7faff"},"timeline":"modern","datepicker":"top_calendar","is_rtl":false,"app_config":{"allow_switch_to_ada":0,"predefined":[]},"button_title":"Reserva tu cita ","button_background_color":"#009cff","button_text_color":"#ffffff","button_position":"right","button_position_offset":"55%"});
          `,
        }}
      />
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
        slogan: "UNA VIDA SALUDABLE EMPIEZA CON UNA MENTE SALUDABLE.",
      },
      revalidate: 30,
    };
  }
};
