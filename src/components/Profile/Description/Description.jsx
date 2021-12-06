import React from "react";
import PropTypes from "prop-types";

const Description = ({ avatar, username, tag, location }) => {
  return (
    <div style={{ backgroundColor: "tomato" }}>
      <img src={avatar} alt={username} class="avatar" />
      <p class="name">{username}</p>
      <p class="tag">@{tag}</p>
      <p class="location">{location}</p>
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
