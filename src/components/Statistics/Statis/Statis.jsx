import React from "react";
import PropTypes from "prop-types";

const Statis = ({ stats }) => {
  return (
    <ul class="stat-list">
      <li class="item">
        <span class="label">{stats.label}</span>
        <span class="percentage">{stats.percentage}</span>
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
