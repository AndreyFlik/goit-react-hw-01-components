import React from "react";

const Description = ({ avatar, username, tag, location }) => {
  return (
    <div class="description">
      <img src={avatar} alt={username} class="avatar" />
      <p class="name">{username}</p>
      <p class="tag">@{tag}</p>
      <p class="location">{location}</p>
    </div>
  );
};

export default Description;
