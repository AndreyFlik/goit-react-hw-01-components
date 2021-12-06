import dataList from "../../Data/data.json";
import Statis from "../Statistics/Statis/Statis";
import Title from "../Statistics/Title/Title";

import React from "react";

const Statistics = () => {
  return (
    <section class="statistics">
      <Title title="Upload stats" />
      {dataList.map((list) => (
        <Statis key={list.id} stats={list} />
      ))}
    </section>
  );
};

export default Statistics;
