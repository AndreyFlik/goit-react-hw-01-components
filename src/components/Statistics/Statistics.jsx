import dataList from "../../Data/data.json";
import Statis from "../Statistics/Statis/Statis";
import Title from "../Statistics/Title/Title";
import s from "../Statistics/Statistics.module.css";

import React from "react";

const Statistics = () => {
  return (
    <section class={s.statistics}>
      <Title title="Upload stats" />
      <div className={s.wrap}>
        {dataList.map((list) => (
          <Statis key={list.id} stats={list} />
        ))}
      </div>
    </section>
  );
};

export default Statistics;
