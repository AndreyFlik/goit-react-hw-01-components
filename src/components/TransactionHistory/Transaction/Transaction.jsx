import React from "react";

const Transaction = ({ items }) => {
  return (
    <tbody>
      <tr>
        <td>{items.type}</td>
        <td>{items.amount}</td>
        <td>{items.currency}</td>
      </tr>
    </tbody>
  );
};

export default Transaction;
