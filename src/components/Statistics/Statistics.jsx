import dataList from "../../Data/data.json";
import Statis from "../Statistics/Statis/Statis";

import React from "react";

// const idList = dataList.map((list) => {
//   return list;
// });
// console.log(idList);
const Statistics = () => {
  return (
    <section class="statistics">
      {dataList.map((list) => (
        <Statis key={list.id} title="Upload stats" stats={list} />
      ))}
    </section>
  );
};

export default Statistics;
