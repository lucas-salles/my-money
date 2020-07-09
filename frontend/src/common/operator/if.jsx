import React from "react";
import promise from "redux-promise";

export default (props) => {
  if (props.test) {
    return props.children;
  } else {
    return false;
  }
};
