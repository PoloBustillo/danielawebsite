import PropTypes from "prop-types";
import Head from "next/head";
import LazyHero from "react-lazy-hero";

const index = (props) => {
  return (
    <div>
      <Head>
        <title>Servicios psicologicos</title>
      </Head>
      <div>
        <LazyHero minHeight={"75vh"} imageSrc="https://unsplash.it/2000/1000">
          <h1>Generic Startup Hype Headline</h1>
        </LazyHero>
      </div>
    </div>
  );
};

index.propTypes = {};

export default index;
