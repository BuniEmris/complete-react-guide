import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./EpensesChart";
const Expenses = ({ expenses }) => {
  const [filteredState, setFilteredState] = useState("2020");

  const onChangeFilter = (enteredState) => {
    setFilteredState(enteredState);
  };
  const filteredArray = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredState;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredState}
          onChangeFilter={onChangeFilter}
        />
        <ExpensesChart expenses={filteredArray} />
        <ExpensesList filteredArray={filteredArray} />
      </Card>
    </div>
  );
};

export default Expenses;
