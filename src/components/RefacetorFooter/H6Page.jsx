import React from "react";
import PropTypes from "prop-types";

const H6Page = (props) => {
  const { children } = props;
  return <h6 className="mb-3 text-base font-normal">{children}</h6>;
};

H6Page.propTypes = {
  children: PropTypes.string,
};

export default H6Page;
