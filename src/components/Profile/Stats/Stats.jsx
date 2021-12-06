import React from "react";

const Stats = ({ stats }) => {
  return (
    <ul class="stats">
      <li>
        <span class="label">{stats.followers}</span>
        <span class="quantity">{stats.views}</span>
        <span class="likes">{stats.likes}</span>
      </li>
      <li>
        <span class="label">{stats.followers}</span>
        <span class="quantity">{stats.views}</span>
        <span class="likes">{stats.likes}</span>
      </li>
      <li>
        <span class="label">{stats.followers}</span>
        <span class="quantity">{stats.views}</span>
        <span class="likes">{stats.likes}</span>
      </li>
    </ul>
  );
};

export default Stats;
