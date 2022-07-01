import React, { useState } from "react";

import { NextSeo, SocialProfileJsonLd } from "next-seo";
import SinglePageLayot from "../../components/SinglePageLayout";
const MiPerfil = (props) => {
  return (
    <div id="sectionBlog">
      <SocialProfileJsonLd
        type="Person"
        name="Psicólogo en Puebla Daniela Diaz"
        url="http://www.psic-danieladiaz.com/blogs"
        sameAs={[
          "https://www.facebook.com/PsicoterapiaDiazMer",
          "https://www.instagram.com/psic_danieladiazm/",
          "https://www.linkedin.com/in/daniela-diaz-408967144",
        ]}
      />
      <NextSeo
        title="Blog para Psicólogos en Puebla - Metodologías terapeuticas - Contenido Psicología "
        description="Quieres saber mas acerca de las terapias y metodologías usadas en las sesiones terapeuticas en Puebla? Entra y conoce mas. Psicologo espcialista en diversos topicos"
        facebook={{
          appId: "430433931632815",
        }}
        openGraph={{
          type: "website",
          url: "https://www.psic-danieladiaz.com/blogs",
          title:
            "Blog para Psicólogos en Puebla - Metodologías terapeuticas - Contenido Psicología",
          description:
            "Quieres saber mas acerca de las terapias y metodologias usadas en las sesiones terapeuticas en Puebla? Entra y conoce mas. Psicologo espcialista en diversos topicos",
          images: [
            {
              url: "https://www.psic-danieladiaz.com/logo500.webp",
              width: 500,
              height: 500,
              alt: "Logo Psicologo en Puebla Daniela Diaz ",
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
      <SinglePageLayot title={"Blogs Psicología en Puebla"}>
        <div className="services-header">
          <h1 className="section-title header">
            <div>Perfil</div>
          </h1>
        </div>
      </SinglePageLayot>

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

MiPerfil.propTypes = {};

export default MiPerfil;
