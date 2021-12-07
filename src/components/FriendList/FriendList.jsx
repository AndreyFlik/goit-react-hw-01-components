import friendList from "../../Data/friends.json";
import FriendListItem from "./FriendListItem/FriendListItem";
import React from "react";
import s from "../FriendList/FriendList.module.css";

const FriendList = () => {
  return (
    <ul className={s.friendList}>
      {friendList.map((stats) => (
        <FriendListItem key={stats.id} stats={stats} />
      ))}
    </ul>
  );
};

export default FriendList;
