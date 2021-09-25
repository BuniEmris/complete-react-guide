import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
const Expenses = ({ expenses }) => {
  return (
    <div className="expenses">
      {expenses.map((item) => (
        <ExpenseItem name={item.title} date={item.date} amount={item.amount} />
      ))}
    </div>
  );
};

export default Expenses;
