import React from "react";
import PropTypes from "prop-types";

const FriendListItem = ({ stats }) => {
  return (
    <li class="item">
      <span class="status"></span>
      <img class="avatar" src={stats.avatar} alt="User avatar" width="48" />
      <p class="name">{stats.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  stats: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default FriendListItem;
