import Transaction from "./Transaction/Transaction";
import transactionList from "../../Data/transactions.json";
import TransactionHead from "./TransactionHead/TransactionHead";
import React from "react";
import s from "../TransactionHistory/TransactionHistory.module.css";

const TransactionHistory = () => {
  return (
    <table className={s.transactioHistory}>
      <TransactionHead></TransactionHead>
      {transactionList.map((list) => (
        <Transaction key={list.id} items={list} />
      ))}
    </table>
  );
};

export default TransactionHistory;
