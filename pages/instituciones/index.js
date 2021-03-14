import React, { useState } from "react";
import { NextSeo, LocalBusinessJsonLd } from "next-seo";
import SinglePageLayout from "../../components/SinglePageLayout";
import { Row, Col, Accordion, Card } from "react-bootstrap";

const Insituciones = (props) => {
  const [accordionSelected, setAccordionSelected] = useState();
  const [flag, setFlag] = useState();
  return (
    <div id="sectionFAQ">
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
        title="Psicólogo Puebla - Terapias - Talleres "
        canonical="https://psic-danieladiaz.com/instituciones"
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
      <SinglePageLayout
        title={"Instituciones asociadas a Pisoclogo en Puebla Daniela Diaz"}
      >
        <>
          <div className="services-header">
            <h1 className="section-title header">
              <div>Instituciones</div>
            </h1>
          </div>

          <Row style={{ justifyContent: "center" }}>
            <Col
              style={{ margin: "4vh 0" }}
              sm={{ span: 8 }}
              centered={"true"}
            ></Col>
          </Row>
        </>
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
      `}</style>
    </div>
  );
};

Insituciones.propTypes = {};

export default Insituciones;
