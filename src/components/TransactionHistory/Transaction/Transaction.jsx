import React from "react";
import PropTypes from "prop-types";
import s from "./Transaction.module.css";
const Transaction = ({ items }) => {
  return (
    <tbody className={s.bgc}>
      <tr>
        <td className={s.textTable}>{items.type}</td>
        <td className={s.textTable}>{items.amount}</td>
        <td className={s.textTable}>{items.currency}</td>
      </tr>
    </tbody>
  );
};

Transaction.propTypes = {
  items: PropTypes.shape({
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  }),
};

export default Transaction;
