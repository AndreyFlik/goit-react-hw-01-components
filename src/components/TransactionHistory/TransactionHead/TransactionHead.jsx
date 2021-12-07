import React from "react";
import s from "./TransactionHead.module.css";

const TransactionHead = () => {
  return (
    <thead className={s.head}>
      <tr>
        <th className={s.tHead}>Type</th>
        <th className={s.tHead}>Amount</th>
        <th className={s.tHead}>Currency</th>
      </tr>
    </thead>
  );
};

export default TransactionHead;
