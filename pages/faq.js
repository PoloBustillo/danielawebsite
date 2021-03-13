import React, { useState } from "react";
import { NextSeo, FAQPageJsonLd } from "next-seo";
import { Row, Col, Accordion, Card } from "react-bootstrap";
import SinglePageLayout from "../components/SinglePageLayout";
import { fetchAPI } from "../lib/api";
import SectionFAQ from "../components/SectionFAQ";
const FAQ = (props) => {
  const [accordionSelected, setAccordionSelected] = useState();
  const [flag, setFlag] = useState();
  const FAQ = props.preguntas.map((item) => {
    return { questionName: item.Pregunta, acceptedAnswerText: item.Respuesta };
  });

  return (
    <div id="sectionFAQ">
      <FAQPageJsonLd mainEntity={FAQ} />
      <NextSeo
        title="Psicólogo Puebla - Preguntas Frecuentes - Resuelve tus dudas para hacer tu cita "
        description="Psicólogo Puebla - Preguntas Frecuentes - Resuelve tus dudas para hacer tu cita "
        facebook={{
          appId: "430433931632815",
        }}
        openGraph={{
          type: "website",
          url: "https://www.psic-danieladiaz.com/faq",
          title: "Preguntas Frecuentes para cita psicólogo en Puebla ",
          description:
            "Preguntas Frecuentes para cita psicólogo en Puebla- Terapia comunitaria ayudando a precios accesibles - Profesionalismo - Contenido enfocado a la psicología - Ayuda psicológica para jóvenes, adultos y niños.",
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
      <SinglePageLayout title={"Preguntas Frecuentes"} sitios={props.sitios}>
        <SectionFAQ preguntas={props.preguntas} />
      </SinglePageLayout>
      <style jsx>{`
        .colfaq {
          margin: 4vh 0 !important;
        }
        #sectionFAQ {
          height: 100%;
          overflow: hidden;
          background-color: rgb(236, 240, 249);
          position: relative;
        }
        .services-header {
          font-family: muli, sans-serif !important;
          font-size: 6vh;

          font-weight: 600;
          padding: 10vmin;
          background-color: rgb(255, 255, 255);
          margin-bottom: 2vh;
        }

        .section-title {
          text-align: center;
          color: rgb(41, 47, 69);
          font-weight: 900;
          margin-block-end: 0;
          font-family: "Noto Sans";
        }

        .content-article {
          padding: 5vw 8vh;
        }
        a {
          text-decoration: none;
        }

        h1 {
          text-align: center;
          font-family: Staatliches;
          font-size: 9vw;
        }

        #category {
          font-family: Staatliches;
          font-weight: 500;
        }

        #title {
          letter-spacing: 0.4px;
          font-size: 22px;
          font-size: 1.375rem;
          line-height: 1.13636;
        }
        .author,
        .divider {
          margin-left: 6vw;
        }
        #banner {
          margin: 20px;
        }

        #editor {
          font-size: 16px;
          font-size: 1rem;
          line-height: 1.75;
        }

        .uk-navbar-container {
          background: #fff !important;
          font-family: Staatliches;
        }

        img:hover {
          opacity: 1;
          transition: opacity 0.25s cubic-bezier(0.39, 0.575, 0.565, 1);
        }
        .social-container {
          float: right;
          margin: 0vh 10vw;
        }
      `}</style>
    </div>
  );
};
export const getStaticProps = async (context) => {
  try {
    const [preguntas, footer] = await Promise.all([
      fetchAPI("preguntas"),
      fetchAPI("footer"),
    ]);

    return {
      props: {
        preguntas: preguntas.Pregunta,
        sitios: footer?.SitiosAfines,
      },
      revalidate: 30,
    };
  } catch (error) {
    console.log("ERROR", error);
    return {
      props: {},
      revalidate: 30,
    };
  }
};

FAQ.propTypes = {};

export default FAQ;
