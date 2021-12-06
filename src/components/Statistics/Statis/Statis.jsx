import React from "react";

const Statis = ({ tittle, stats }) => {
  return (
    <div style={{ backgroundColor: "blue" }}>
      <h2 class="title">{tittle}</h2>
      <ul class="stat-list">
        <li class="item">
          <span class="label">{stats.label}</span>
          <span class="percentage">{stats.percentage}</span>
        </li>
      </ul>
    </div>
  );
};

export default Statis;
