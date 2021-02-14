import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content="Servicios psicologicos" />
          <meta
            name="keywords"
            content="Psicologia, Terapia infantil, Terapia parejas, Picologia Educativa, "
          />
          <meta name="author" content="Daniela Diaz Merino" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="shortcut icon" href="logonobg.png" />
        </Head>
        <body>
          <script>
            if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object')
            (__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {})
          </script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
