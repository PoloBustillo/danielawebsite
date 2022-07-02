import Markdown from "markdown-to-jsx";
import { NextSeo, ProductJsonLd } from "next-seo";
import { useState } from "react";
import { fetchAPI } from "../../lib/api";
import SinglePageLayout from "../../components/SinglePageLayout";
import Seo from "../../components/SEO";
import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import StickyBar from "../../components/StickyBar";
import SideMenu from "../../components/SideMenu";
const Article = ({ article, sitios, terapias }) => {
  const [isOpen, setOpen] = useState(false);
  const seo = {
    metaTitle: article.Nombre,
    metaDescription: article.Contenido[0].Description,
    shareImage: article.Contenido[0]?.Imagen.url,
    article: true,
  };
  const shareUrl = `${
    process.env.NEXT_PUBLIC_BASE_URL
  }/terapia/${article.Nombre.replace(/\s+/g, "_")}`;
  const date = new Date(article.published_at);

  return (
    <SinglePageLayout title={article.Nombre} id={article.id} sitios={sitios}>
      <ProductJsonLd
        productName={`${article.Nombre}`}
        images={[`${article.Contenido[0]?.Imagen.url}`]}
        description={`${article?.Contenido[0]?.Descripcion}`}
        brand="Psicologo Puebla"
        reviews={[
          {
            author: {
              type: "Person",
              name: "Polo Bustillo",
            },
            datePublished: "2019-01-05T03:37:40Z",
            reviewBody: "Muy profesional y super puntual",
            name: "La mejor psicologa de Puebla!!!",
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
            publisher: {
              type: "Organization",
              name: "Piscolo Puebla Daniela Diaz",
            },
          },
          {
            author: {
              type: "Person",
              name: "Jorge Gonzalez",
            },
            datePublished: "2020-02-05T08:37:40Z",
            reviewBody:
              "Entendio mis problemas desde el principio y me ayudo a superarlos",
            name: "Muy buena experiencia",
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
            publisher: {
              type: "Organization",
              name: "Piscolo Puebla Daniela Diaz",
            },
          },
          {
            author: {
              type: "Person",
              name: "Alicia Lovegood",
            },
            datePublished: "2020-03-19T18:12:30Z",
            reviewBody: "De lo mejor en Puebla, siempre atenta",
            name: "Super recomendada",
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
            publisher: {
              type: "Organization",
              name: "Piscolo Puebla Daniela Diaz",
            },
          },
          {
            author: {
              type: "Person",
              name: "German Mendieta",
            },
            datePublished: "2020-02-25T18:12:30Z",
            reviewBody: "De lo mejor en Puebla, siempre atenta",
            name: "Super recomendada",
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
            publisher: {
              type: "Organization",
              name: "Piscolo Puebla Daniela Diaz",
            },
          },
        ]}
        aggregateRating={{
          ratingValue: "4.8",
          reviewCount: "89",
        }}
        sku={`${article.id}`}
        offers={[
          {
            price: `${article?.Contenido[0]?.Costo}`,
            priceCurrency: "MXN",
            availability: "https://schema.org/InStock",
            priceValidUntil: "2020-11-05",
            url: `https://psic-danieladiaz.com/terapia/${article.Nombre.replace(
              /\s+/g,
              "_"
            )}`,
            seller: {
              name: "Psicologo en Puebla Daniela Diaz",
            },
          },
        ]}
        mpn="925872"
      />
      <NextSeo
        canonical={`https://psic-danieladiaz.com/terapia/${article.Nombre.replace(
          /\s+/g,
          "_"
        )}`}
        title={`${article.Nombre} en Puebla - Citas psicológicas Puebla - Psicólogo Puebla`}
        description={`${article.Nombre} en Puebla usando metodologías especializadas, Psicólogo Daniela Diaz`}
        facebook={{
          appId: "430433931632815",
        }}
        openGraph={{
          type: "website",
          url: `https://psic-danieladiaz.com/terapia/${article.Nombre.replace(
            /\s+/g,
            "_"
          )}`,
          title: `${article.Nombre} en Puebla - Citas psicológicas Puebla - Psicologo Daniela Diaz`,
          description: `${article.Nombre} en Puebla usando metodologías especializadas, Psicólogo Daniela Diaz`,
          images: [
            {
              url: "https://www.psic-danieladiaz.com/logo500.webp",
              width: 500,
              height: 500,
              alt: "Psicologo Daniela Diaz Logo",
            },
            {
              url: `${article.Contenido[0]?.Imagen.url}`,
              width: 800,
              height: 600,
              alt: `${article.Nombre} en Puebla - Citas psicológicas Puebla`,
            },
          ],
        }}
      />
      <SideMenu
        terapias={terapias}
        isOpen={isOpen}
        setOpen={setOpen}
      ></SideMenu>
      <StickyBar
        terapias={terapias}
        isMenuOpen={isOpen}
        setOpenMenu={setOpen}
        color={"black"}
      ></StickyBar>
      <Seo seo={seo} />

      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <h1>{article.Nombre}</h1>
          <div
            id="banner"
            className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
            data-src={article.Contenido[0]?.Imagen.url}
            data-srcset={article.Contenido[0]?.Imagen.url}
            data-uk-img
          ></div>
          <div className="social-container">
            <FacebookShareButton
              quote={`Te invito a checar esta terapia: ${article.Nombre}`}
              url={shareUrl}
              hashtag={"#Puebla #Terapia #Piscologo"}
            >
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <WhatsappShareButton url={shareUrl}>
              <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
            <TelegramShareButton
              title={`Te invito a checar esta terapia: ${article.Nombre}`}
              url={shareUrl}
            >
              <TelegramIcon size={32} round={true} />
            </TelegramShareButton>
            <TwitterShareButton
              title={`Te invito a checar esta terapia: ${article.Nombre}`}
              hashtags={["Psicologo", "Puebla", "Psicologa"]}
              url={shareUrl}
            >
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <EmailShareButton
              subject={`Te invito a checar esta terapia: ${article.Nombre}`}
              body={article.Contenido[0].Descripcion}
            >
              <EmailIcon size={32} round={true} />
            </EmailShareButton>
          </div>
          <hr className="divider uk-divider-small" />
          <div
            className="author uk-grid-small uk-flex-left"
            data-uk-grid="true"
          >
            <div className="uk-width-expand">
              <p className="uk-margin-remove-bottom">Psicóloga Daniela Diaz</p>
              <p className="uk-text-meta uk-margin-remove-top">
                {date.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="content-article">
            <Markdown>{article.Contenido[0].DescripcionAmplia}</Markdown>
          </div>
        </div>
      </div>
      <style jsx>
        {`
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
        `}
      </style>
    </SinglePageLayout>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("tipos-terapias");
  const params = articles.map((article) => {
    let newTerapia = article.Nombre.replace(/\s+/g, "_");
    return { params: { slug: newTerapia } };
  });
  return {
    paths: params,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  let newTerapia = params.slug.replace(/_/g, " ");
  try {
    const [article, footer, areas] = await Promise.all([
      fetchAPI(`tipos-terapias/name/${newTerapia}`),
      fetchAPI("footer"),
      fetchAPI("areas"),
    ]);

    return {
      props: {
        article: article,
        sitios: footer?.SitiosAfines,
        terapias: areas,
      },
      revalidate: 5,
    };
  } catch (error) {
    return {
      props: {
        areas: [],
        terapias: [],
      },
      revalidate: 5,
    };
  }
};
export default Article;
