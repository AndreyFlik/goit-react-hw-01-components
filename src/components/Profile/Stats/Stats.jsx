import React from "react";
import PropTypes from "prop-types";
import s from "./Stats.module.css";

const Stats = ({ stats }) => {
  return (
    <ul>
      <li className={s.stats}>
        <span className={s.label}>
          followers <br />
          {stats.followers}
        </span>
        <span className={s.label}>
          views <br />
          {stats.views}
        </span>
        <span className={s.label}>
          likes <br />
          {stats.likes}
        </span>
      </li>
    </ul>
  );
};

Stats.propTypes = { stats: PropTypes.objectOf(PropTypes.number) };

export default Stats;
