import ReactMarkdown from "react-markdown";
import { fetchAPI } from "../../lib/api";
import Seo from "../../components/seo";

const Article = ({ article }) => {
  const seo = {
    metaTitle: article.Nombre,
    metaDescription: article.Contenido[0].Description,
    shareImage: article.Contenido[0]?.Imagen.url,
    article: true,
  };
  return (
    <div>
      <Seo seo={seo} />
      <div
        id="banner"
        className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
        data-src={article.Contenido[0]?.Imagen.url}
        data-srcset={article.Contenido[0]?.Imagen.url}
        data-uk-img
      >
        <h1>{article.Nombre}</h1>
      </div>
      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <ReactMarkdown
            source={article.Contenido[0].DescripcionAmplia}
            escapeHtml={false}
          />
          <hr className="uk-divider-small" />
          <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
            <div className="uk-width-expand">
              <p className="uk-margin-remove-bottom">By Daniela</p>
              <p className="uk-text-meta uk-margin-remove-top">
                {article.published_at}
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          a {
            text-decoration: none;
          }

          h1 {
            font-family: Staatliches;
            font-size: 120px;
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

          #banner {
            margin: 20px;
            height: 800px;
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
