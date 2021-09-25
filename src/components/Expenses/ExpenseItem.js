import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
const ExpenseItem = ({ date, name, amount }) => {
  const [title, setTitle] = useState(name);
  const clickHandler = () => {
    setTitle("Buni");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">{amount}</div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};
export default ExpenseItem;
