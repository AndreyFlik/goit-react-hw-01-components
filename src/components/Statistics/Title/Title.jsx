import PropTypes from "prop-types";
import s from "./Title.module.css";

import React from "react";

const Title = ({ title }) => {
  return title && <h2 className={s.titles}>{title}</h2>;
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
