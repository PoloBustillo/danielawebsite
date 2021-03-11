import ReactMarkdown from "react-markdown";
import Head from "next/head";
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
const Article = ({ article, sitios }) => {
  const [isOpen, setOpen] = useState(false);
  const seo = {
    metaTitle: article.Nombre,
    metaDescription: article.Contenido[0].Description,
    shareImage: article.Contenido[0]?.Imagen.url,
    article: true,
  };
  const shareUrl = `${process.env.NEXT_PUBLIC_VERCEL_URL}/tratamiento/${article.id}`;
  const date = new Date(article.published_at);

  return (
    <SinglePageLayout title={article.Nombre} id={article.id} sitios={sitios}>
      <Head>
        <title>{`${article.Nombre} - Psicologo Puebla - Haz tu cita`}</title>
        <meta
          name="title"
          content={`${article.Nombre} - Psicologo Puebla - Haz tu cita`}
        />
        <meta
          name="description"
          content={`${article.Nombre} - Especialista Psicologo en ${article.Nombre}, citas en Puebla. Mejores precios en terapia psicologicas`}
        />
        <meta http-equiv="content-language" content="es" />
        <meta name="keywords" content={`{article.Nombre}`} />
        <meta name="author" content="Daniela Diaz Merino" />
        <link rel="shortcut icon" href="logonobg.png" />
      </Head>
      <SideMenu isOpen={isOpen} setOpen={setOpen}></SideMenu>
      <StickyBar
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
              hashtag={"#Puebla"}
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
              <p className="uk-margin-remove-bottom">Daniela Diaz Merino</p>
              <p className="uk-text-meta uk-margin-remove-top">
                {date.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="content-article">
            <ReactMarkdown
              source={article.Contenido[0].DescripcionAmplia}
              escapeHtml={false}
            />
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
    return { params: { slug: article.id } };
  });
  return {
    paths: params,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  try {
    const [article, footer] = await Promise.all([
      fetchAPI(`tipos-terapias/${params.slug}`),
      fetchAPI("footer"),
    ]);

    return {
      props: {
        article: article,
        sitios: footer?.SitiosAfines,
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
