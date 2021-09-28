import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
const ExpenseItem = ({ date, name, amount }) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{name}</h2>
        </div>
        <div className="expense-item__price">{amount}</div>
      </Card>
    </li>
  );
};
export default ExpenseItem;
