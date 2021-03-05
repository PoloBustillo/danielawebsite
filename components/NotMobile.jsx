import React, { useState } from "react";
import { isMobile } from "react-device-detect";

const NotMobile = (props) => {
  return !isMobile
    ? props.children
    : props.mobileChildren
    ? props.mobileChildren
    : null;
};

NotMobile.propTypes = {};

export default NotMobile;
