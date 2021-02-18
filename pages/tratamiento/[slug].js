import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { fetchAPI } from "../../lib/api";
import Seo from "../../components/SEO";
import absoluteUrl from "next-absolute-url";
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share";
import StickyBar from "../../components/StickyBar";
import SideMenu from "../../components/SideMenu";
const Article = ({ article }) => {
  const [isOpen, setOpen] = useState(false);
  const seo = {
    metaTitle: article.Nombre,
    metaDescription: article.Contenido[0].Description,
    shareImage: article.Contenido[0]?.Imagen.url,
    article: true,
  };
  const shareUrl = `${process.env.NEXT_PUBLIC_VERCEL_URL}/tratamiento/${article.id}`;
  return (
    <div>
      <SideMenu isOpen={isOpen} setOpen={setOpen}></SideMenu>
      <StickyBar
        isMenuOpen={isOpen}
        setOpenMenu={setOpen}
        color={"black"}
      ></StickyBar>
      <Seo seo={seo} />

      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <div
            id="banner"
            className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
            data-src={article.Contenido[0]?.Imagen.url}
            data-srcset={article.Contenido[0]?.Imagen.url}
            data-uk-img
          >
            <h1>{article.Nombre}</h1>
          </div>
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
                {article.published_at}
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
            font-family: Staatliches;
            font-size: 5rem;
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
    </div>
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
    const article = await fetchAPI(`tipos-terapias/${params.slug}`);
    console.log("ARTICLE", article);
    return {
      props: {
        article: article,
      },
      revalidate: 5,
    };
  } catch (error) {
    console.log("ERROR", error);
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
