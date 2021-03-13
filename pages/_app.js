import "../styles/timeline.css";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-awesome-button/dist/themes/theme-one.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Provider } from "next-auth/client";
import Head from "next/head";
import dynamic from "next/dynamic";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});
const NotMobile = dynamic(() => import("../components/NotMobile"), {
  ssr: false,
});

export function reportWebVitals(metric) {
  //console.log(metric);
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta httpEquiv="content-language" content="es" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Staatliches"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />
        <script src="//widget.simplybook.me/v2/widget/widget.js"></script>
        <script
          data-pace-options='{ "ajax": false, "eventLag": false }'
          src="https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js"
        ></script>
      </Head>

      <NotMobile>
        <div style={{ zIndex: "1100" }}>
          <AnimatedCursor
            innerSize={18}
            outerSize={24}
            color="182,95,207"
            outerAlpha={0.2}
            innerScale={2}
            outerScale={5}
          />
        </div>
      </NotMobile>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
