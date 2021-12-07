import React from "react";
import PropTypes from "prop-types";
import s from "./FriendListItem.module.css";

const FriendListItem = ({ stats }) => {
  return (
    <li className={stats.isOnline ? s.status : s.notStatus}>
      <span></span>
      <img src={stats.avatar} alt="User avatar" width="48" />
      <p>{stats.name}</p>
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
