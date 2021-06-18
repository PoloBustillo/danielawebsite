import React, { useState } from "react";

import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import Footer from "../components/Footer";
import StickyBar from "../components/StickyBar";
import SideMenu from "../components/SideMenu";
import Seo from "../components/SEO";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextSeo, LocalBusinessJsonLd } from "next-seo";
const seo = {
  metaTitle:
    "Haz tu cita para cualquier terapia con la Psicologa Daniela Diaz Merino",
  metaDescription:
    "Haz tu cita para cualquier terapia con la Psicologa Daniela Diaz Merino",
};
const citas = (props) => {
  const [color, setColor] = useState();
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <LocalBusinessJsonLd
        type="Store"
        id="http://psic-danieladiaz.com"
        name="Psicólogo en Puebla Daniela Diaz Merino"
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
          "https://psic-danieladiaz.com/PsicologoPueblaAgendar.png",
          "https://example.com/photos/4x3/photo.jpg",
          "https://example.com/photos/16x9/photo.jpg",
        ]}
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
        canonical="https://psic-danieladiaz.com/citas"
        title="Citas terapias Piscólogo Puebla - Citas psicológicas Puebla - Puedes agendar tus citas en Puebla"
        description="Citas en Puebla - Agenda tu terapia - Citas psicologicas para jovenes, adultos y niños. Accede para conocer mas acerca de las citas"
        facebook={{
          appId: "430433931632815",
        }}
        openGraph={{
          type: "website",
          url: "https://www.psic-danieladiaz.com/citas",
          title: "Citas en Puebla - Agenda tu terapia",
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
              url: "https://storage.googleapis.com/danielawebsite.appspot.com/1107a6fe_8609_438a_a764_81f0f3567fc9_0ac38050f9.jpg?GoogleAccessId=firebase-adminsdk-jk35c%40danielawebsite.iam.gserviceaccount.com&Expires=16730323200&Signature=srsM%2BNRZz84bMRTo8JwV69DCoQjkD%2FnDObfiZI8bv2voQo13IypNv%2Fakmo22mAN%2BUNAAc34K6h9GCACAhO7xO%2Bcg5cr8HQMB%2B2%2BLovcQpgm4y9X32wt3M79Qrp17%2BLDF2OfCaWXKZ0qhmGNM6k3DLwN716PGT4zzjk5IUDv%2FkEcMv0weYasnqXEHXxvtBivxa%2Bfkp1DnPjvhn92bbD838wS%2Ftag8HbSgEAoWd8bC1G1WO%2B9F4blrOSrf5UISatHj%2F%2By6v6HKkuRJOFaUxW8tcQQu0j%2FzmbqYZdJdfaVEQgVzpzb2S8awJP9aGu%2B2Sl6jSwIC4DHeUBUVxPsLLgFLgA%3D%3D&safewithFileCaching=dummyValue",
              width: 800,
              height: 600,
              alt: "Terapias en Puebla ",
            },
          ],
        }}
      />

      <Navbar
        style={{
          backgroundColor: "#24201e !important",
          position: "fixed",
          top: "0",
          width: "100vw",
          height: "85px",
        }}
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand
          style={{
            fontFamily: "Playfair Display",
            fontWeight: "900",
            fontSize: "20px",
            fontStyle: "italic",
          }}
          href="/"
        >
          Psic. Daniela Diaz Merino
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/#sectionServices">
            {" "}
            <FontAwesomeIcon icon={faUndo} /> Regresar
          </Nav.Link>
        </Nav>
      </Navbar>
      <SideMenu isOpen={isOpen} setOpen={setOpen}></SideMenu>
      <div id="citaMenu">
        <StickyBar
          isMenuOpen={isOpen}
          setOpenMenu={setOpen}
          color={"black"}
        ></StickyBar>
      </div>
      <Seo seo={seo} />
      <iframe
        width="100%"
        height="2000px"
        src="https://psicdaniela.simplybook.me/v2/#book?widget-type=iframe&theme=bookingtroll&theme=bookingtroll&timeline=modern&datepicker=top_calendar#book"
      ></iframe>
      <Footer sitios={props.sitios}></Footer>
    </div>
  );
};

citas.propTypes = {};

export default citas;
