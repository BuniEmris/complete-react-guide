import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = ({ date, name, amount }) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{name}</h2>
      </div>
      <div className="expense-item__price">{amount}</div>
    </div>
  );
};
export default ExpenseItem;
