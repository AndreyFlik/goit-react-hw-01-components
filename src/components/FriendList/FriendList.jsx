import friendList from "../../Data/friends.json";
import FriendListItem from "./FriendListItem/FriendListItem";

import React from "react";

const FriendList = () => {
  return (
    <ul class="friend-list">
      {friendList.map((list) => (
        <FriendListItem key={list.id} stats={list} />
      ))}
    </ul>
  );
};

export default FriendList;
