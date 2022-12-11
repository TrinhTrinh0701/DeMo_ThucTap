import React from "react";
import PropTypes from "prop-types";

const H3Page = (props) => {
  const { children } = props;
  return <h3 className="mb-4 text-xl font-bold">{children}</h3>;
};

H3Page.propTypes = {
  children: PropTypes.string,
};

export default H3Page;
