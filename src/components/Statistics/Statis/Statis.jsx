import React from "react";
import PropTypes from "prop-types";
import s from "./Statis.module.css";

const Statis = ({ stats }) => {
  return (
    <ul className={s.list}>
      <li className={s.statList}>
        <span>{stats.label}</span>
        <span>{stats.percentage}</span>
      </li>
    </ul>
  );
};

Statis.propTypes = {
  stats: PropTypes.shape({
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};

export default Statis;
