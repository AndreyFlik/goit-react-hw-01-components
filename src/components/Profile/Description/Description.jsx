import React from "react";
import PropTypes from "prop-types";
import s from "./Description.module.css";

const Description = ({ avatar, username, tag, location }) => {
  return (
    <div className={s.description}>
      <img src={avatar} alt={username} className={s.avatar} />
      <p className={s.name}>{username}</p>
      <p className={s.tag}>@{tag}</p>
      <p className={s.tag}>{location}</p>
    </div>
  );
};

Description.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};

export default Description;
