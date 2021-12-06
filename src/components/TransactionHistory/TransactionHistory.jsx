import Transaction from "./Transaction/Transaction";
import transactionList from "../../Data/transactions.json";
import TransactionHead from "./TransactionHead/TransactionHead";
import React from "react";

const TransactionHistory = () => {
  return (
    <table class="transaction-history">
      <TransactionHead></TransactionHead>
      {transactionList.map((list) => (
        <Transaction key={list.id} items={list} />
      ))}
    </table>
  );
};

export default TransactionHistory;
