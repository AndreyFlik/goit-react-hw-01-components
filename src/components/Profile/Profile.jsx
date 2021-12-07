import React from "react";
import userList from "../../Data/user.json";

import Description from "../Profile/Description/Description";
import Stats from "../Profile/Stats/Stats";
import s from "../Profile/Profile.module.css";

const { username, tag, location, avatar, stats } = userList;

const Profile = () => {
  return (
    <div className={s.ProfileWrap}>
      <Description
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />

      <Stats stats={stats} />
    </div>
  );
};

export default Profile;
