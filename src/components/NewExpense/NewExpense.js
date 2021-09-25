import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = ({ onaddExpenseHandler }) => {
  const forSaveExData = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };

    onaddExpenseHandler(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm forSaveExData={forSaveExData} />
    </div>
  );
};
export default NewExpense;
