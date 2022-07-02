import React from "react";
import Footer from "./Footer";

const SinglePageLayout = (props) => {
  return (
    <>
      {props.children}
      <Footer sitios={props.sitios}></Footer>
    </>
  );
};

SinglePageLayout.propTypes = {};

export default SinglePageLayout;
