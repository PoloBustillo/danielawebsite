import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-awesome-button/dist/themes/theme-one.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import LazyLoad from "react-lazyload";

config.autoAddCss = false;
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import dynamic from "next/dynamic";
const MessengerChat = dynamic(
  () => import("react-messenger-chat-plugin").then((mod) => mod.MessengerChat),
  {
    ssr: false,
  }
);
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});
const NotMobile = dynamic(() => import("../components/NotMobile"), {
  ssr: false,
});

export function reportWebVitals(metric) {
  //console.log(metric);
}

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <meta http-equiv="content-language" content="es" />
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
      </Head>
      <LazyLoad>
        <MessengerChat
          pageId="106715554719583"
          appId="430433931632815"
          htmlRef="messengerRef"
          minimized={true}
          loggedInGreeting="Bienvenido al chat de la psicóloga Daniela Diaz, responderemos lo mas pronto posible..."
          greetingDialogDisplay="fade"
          language="es_LA"
          shouldShowDialog={false}
        />
      </LazyLoad>

      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
