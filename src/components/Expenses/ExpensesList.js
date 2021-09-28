import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = ({ filteredArray }) => {
  return filteredArray.length ? (
    filteredArray.map((item) => (
      <ul className="expenses-list">
        <ExpenseItem
          key={item.id}
          name={item.title}
          date={item.date}
          amount={item.amount}
        />
      </ul>
    ))
  ) : (
    <h2 className="expenses-list__fallback">No expenses found</h2>
  );
};
export default ExpensesList;
