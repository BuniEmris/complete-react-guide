import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
const Expenses = ({ expenses }) => {
  const [filteredState, setFilteredState] = useState("2020");
  const onChangeFilter = (enteredState) => {
    setFilteredState(enteredState);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredState}
          onChangeFilter={onChangeFilter}
        />
        {expenses.map((item) => (
          <ExpenseItem
            name={item.title}
            date={item.date}
            amount={item.amount}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
