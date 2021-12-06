import React from "react";

const FriendListItem = ({ stats }) => {
  return (
    <li class="item">
      <span class="status"></span>
      <img class="avatar" src={stats.avatar} alt="User avatar" width="48" />
      <p class="name">{stats.name}</p>
    </li>
  );
};

export default FriendListItem;
