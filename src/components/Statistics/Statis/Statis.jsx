import React from "react";

const Statis = (list) => {
  return (
    <div>
      <h2 class="title">Upload stats</h2>
      <ul class="stat-list">
        <li class="item">
          <span class="label">{list.label}</span>
          <span class="percentage">{list.percentage}</span>
        </li>
        <li class="item">
          <span class="label">{list.label}</span>
          <span class="percentage">{list.percentage}</span>
        </li>
        <li class="item">
          <span class="label">.pdf</span>
          <span class="percentage">{list.percentage}</span>
        </li>
        <li class="item">
          <span class="label">{list.label}</span>
          <span class="percentage">{list.percentage}</span>
        </li>
      </ul>
      )
    </div>
  );
};

export default Statis;
