import { NextSeo, LocalBusinessJsonLd } from "next-seo";
import React, { useState } from "react";
import SectionHome from "../components/SectionHome";
import SideMenu from "../components/SideMenu";
import StickyBar from "../components/StickyBar";
import SectionServices from "../components/SectionServices";
import SectionFAQ from "../components/SectionFAQ";
import Footer from "../components/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LazyLoad from "react-lazyload";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faBrain,
  faBullhorn,
  faLocationDot,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Divider } from "@material-ui/core";
import Link from "next/link";
import { useSession } from "next-auth/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Background, Parallax } from "react-parallax";
import {
  getBannerImages,
  getMensajes,
  getPreguntas,
  getTerapias,
  getWebData,
} from "../lib/api";

export default function Home(props) {
  const [isOpen, setOpen] = useState(false);

  const session = useSession();

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

      {props.mensaje.enable ? (
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
            {props.mensaje.message}
          </p>
        </Row>
      ) : (
        <></>
      )}

      <SideMenu
        redes={props.redes}
        areas={props.areas}
        telefono={props.telefono}
        email={props.email}
        isOpen={isOpen}
        setOpen={setOpen}
      ></SideMenu>

      <StickyBar
        areas={props.areas}
        isMenuOpen={isOpen}
        setOpenMenu={setOpen}
      ></StickyBar>

      <SectionHome
        id="home"
        homeData={props.home}
        nombre={props.nombreSite ? props.nombreSite : ""}
        images={props.bannerImages}
        slogan={`"${props.lema.message}"`}
        frase={props.frase.message}
      ></SectionHome>
      <Divider className="mx-10 my-3"></Divider>

      <Container>
        <Row>
          <Col className="px-5 my-auto" style={{ textAlign: "center" }}>
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
              <Link href={props.gMapsUrl}>
                <Row
                  className="m-auto"
                  style={{ textAlign: "justify", cursor: "pointer" }}
                >
                  <FontAwesomeIcon
                    style={{ fontSize: "20px", marginRight: "20px" }}
                    icon={faLocationDot}
                  ></FontAwesomeIcon>

                  <div>
                    {props.address.map((addressLine) => {
                      return <div>{addressLine.values}</div>;
                    })}
                  </div>
                </Row>
              </Link>
              <Link href={`mailto:${props.email}`}>
                <Row
                  className="m-auto"
                  style={{ textAlign: "justify", cursor: "pointer" }}
                >
                  <FontAwesomeIcon
                    style={{ fontSize: "20px", marginRight: "20px" }}
                    icon={faAt}
                  ></FontAwesomeIcon>

                  <div>{props.email}</div>
                </Row>
              </Link>

              <Link href={`tel:${props.telefono}`}>
                <Row
                  className="m-auto"
                  style={{
                    textAlign: "justify",
                    float: "right",
                    cursor: "pointer",
                  }}
                >
                  <div>
                    <FontAwesomeIcon fixedWidth size="1x" icon={faPhoneAlt} />
                    <span className="my-auto">{props.telefono}</span>
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
        <SectionServices areas={props.areas}></SectionServices>
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
      {false ? (
        <Parallax strength={300}>
          <Background className="custom-bg">
            <img src="adoles.png" alt="fill murray" />
            <img src="family.png" alt="fill murray" />
            <img src="online.png" alt="fill murray" />
          </Background>
          <VerticalTimeline lineColor="black">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgb(33, 150, 243,.6)",
                color: "#fff",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2011 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<></>}
            >
              <h3 className="vertical-timeline-element-title">
                Creative Director
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              contentStyle={{
                background: "rgb(33, 150, 243,.6)",
                color: "#fff",
              }}
              iconStyle={{ background: "rgb(33, 150, 243,.6)", color: "#fff" }}
              icon={<></>}
            >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, SEO, Online
                Marketing
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2008 - 2010"
              contentStyle={{
                background: "rgb(33, 150, 243,.6)",
                color: "#fff",
              }}
              iconStyle={{ background: "rgb(33, 150, 243,.6)", color: "#fff" }}
              icon={<></>}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Los Angeles, CA
              </h4>
              <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgb(33, 150, 243,.6)",
                color: "#fff",
              }}
              date="2006 - 2008"
              iconStyle={{ background: "rgb(33, 150, 243,.6)", color: "#fff" }}
              icon={<></>}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "rgb(33, 150, 243,.6)",
                color: "#fff",
              }}
              date="April 2013"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<></>}
            >
              <h3 className="vertical-timeline-element-title">
                Content Marketing for Web, Mobile and Social Media
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Online Course
              </h4>
              <p>Strategy, Social Media</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="November 2012"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<></>}
            >
              <h3 className="vertical-timeline-element-title">
                Agile Development Scrum Master
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Certification
              </h4>
              <p>Creative Direction, User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2002 - 2006"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<></>}
            >
              <h3 className="vertical-timeline-element-title">
                Bachelor of Science in Interactive Digital Media Visual Imaging
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bachelor Degree
              </h4>
              <p>Creative Direction, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
              icon={<></>}
            />
          </VerticalTimeline>
        </Parallax>
      ) : (
        <></>
      )}
      <LazyLoad offset={100}>
        <Footer
          telefono={props.telefono}
          redes={props.redes}
          address={props.address}
          sitios={props.sitios}
          email={props.email}
          map={props.gMapsUrl}
        ></Footer>
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
    const mensajes = await getMensajes();
    const bannerImages = await getBannerImages();
    const data = await getWebData();
    const preguntas = await getPreguntas();
    const terapias = await getTerapias();

    let areas = terapias.map((terapia) => {
      return terapia.type;
    });

    let socialNetwork = data.socialNetwork?.reduce(
      (a, v) => ({ ...a, [v.red]: v.values }),
      {}
    );

    let areasTerapias = terapias?.reduce((a, v) => {
      if (a[v.type]) {
        a[v.type] = a[v.type].concat(v);
      } else {
        a[v.type] = [v];
      }
      return a;
    }, {});

    console.log(areasTerapias);
    return {
      props: {
        ...mensajes,
        bannerImages: bannerImages,
        address: data.address,
        redes: socialNetwork,
        email: data.email,
        nombreSite: data.name,
        telefono: data.telefono,
        gMapsUrl: data.googleMapUrl,
        preguntas: preguntas,
        terapias: terapias,
        areas: areasTerapias,
        sitios: [],
        home: "",
      },
      revalidate: 86400,
    };
  } catch (error) {
    console.error("ERROR", error);
    return {
      props: {
        terapias: [],
        areas: ["Social", "Educativa", "Organizacional", "Clinica"],
        redes: {
          facebook: "https://www.facebook.com/PsicoterapiaDiazMer",
          linkedin: "https://www.linkedin.com/in/daniela-diaz-408967144",
          whatsapp:
            "https://api.whatsapp.com/send/?phone=5212211165866&text=Hola+Psic.+Daniela+quisiera+informaci%C3%B3n+acerca+de%3A&type=phone_number&app_absent=0",
          instagram: "https://www.instagram.com/psic_danieladiazm/",
        },
        preguntas: [
          {
            pregunta:
              "¿Maneja servicio de intervención en crisis (primeros auxilios psicológicos)?",
            respuesta:
              "El servicio de intervención en crisis psicológicas está disponible las 24 horas del día en modalidad telefónica. Para obtener una mejor intervención se recomienda posteriormente, solicitar sesiones presenciales para identificar y prevenir secuelas psicológicas.\n" +
              "\n" +
              "Escribe un mensaje con tus datos de identificación vía redes sociales (Messenger, WhatsApp, Instagram, mensajería telefónica) y en breve gestionaremos la llamada de primeros auxilios psicológicos.",
          },
          {
            respuesta:
              "Tienes dos opciones:\n" +
              "\n" +
              "1. Proceder con una evaluación socioeconómica para determinar el descuento a aplicar. ([Ver formato)](https://psic-danieladiaz.com/instituciones)\n" +
              "\n" +
              "2. Comprobar que se pertenece alguna de las instituciones asociadas ([Ver lista](https://psic-danieladiaz.com/instituciones))",
            pregunta: "¿Cómo puedo acceder a algún descuento?",
          },
          {
            respuesta:
              "La forma de pago deberá realizarse mediante una transferencia bancaría al número de cuenta que se le proporcionará al momento de agendar cita y corroborar su información con la Psicoterapeuta.",
            pregunta: "¿Cuál es el método de pago?",
          },
          {
            pregunta: "¿Cómo recibir sesión terapéutica en línea?",
            respuesta:
              "El servicio psicológico en línea está dirigido específicamente para la modalidad de terapia individual. Escribe un mensaje con tus datos de identificación vía redes sociales (Messenger, WhatsApp, Instagram, mensajería telefónica), solicitando el servicio terapéutico en línea y en breve recibirás la información correspondiente a los detalles de las sesiones en línea.",
          },
          {
            respuesta:
              "El horario fijo es de Lunes a viernes de 9:00am a 12:00pm y de 2:00pm a 6:00pm. Sin embargo, mediante mutuo acuerdo pueden adaptarse horarios especiales.",
            pregunta: "¿Qué horarios tiene disponibles?",
          },
        ],
        nombreSite: "Psicóloga Daniela Diaz Merino",
        email: "psic.danieladiazmer@gmail.com",
        address: [
          "Mártires del 2 de Octubre",
          "Reserva Territorial Atlixcáyotl",
          "Ex-Rancho Vaquerías",
          "72464",
          "Puebla, Puebla",
        ],
        frase: { message: "", enable: false },
        mensaje: { message: "", enable: false },
        bannerImages: [],
        lema: {
          message: "UNA VIDA SALUDABLE EMPIEZA CON UNA MENTE SALUDABLE.",
        },
      },
      revalidate: 30,
    };
  }
};
