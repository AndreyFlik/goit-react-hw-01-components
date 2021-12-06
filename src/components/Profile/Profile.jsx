import React from "react";
import userList from "../../Data/user.json";

import Description from "../Profile/Description/Description";
import Stats from "../Profile/Stats/Stats";

const { username, tag, location, avatar, stats } = userList;

const Profile = () => {
  return (
    <div>
      <Description
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      ></Description>

      <Stats stats={stats}></Stats>
    </div>
  );
};

export default Profile;
