import React from "react";
import PropTypes from "prop-types";

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

Transaction.propTypes = {
  items: PropTypes.shape({
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  }),
};

export default Transaction;
