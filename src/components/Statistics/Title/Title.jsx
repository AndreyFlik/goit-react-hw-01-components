import PropTypes from "prop-types";

import React from "react";

const Title = ({ title }) => {
  return title && <h2 class="title">{title}</h2>;
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
