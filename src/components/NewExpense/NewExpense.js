import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = ({ onaddExpenseHandler }) => {
  const [show, setShow] = useState(true);
  const forSaveExData = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };

    onaddExpenseHandler(expenseData);
  };
  return (
    <div className="new-expense">
      {show ? (
        <div onClick={() => setShow(false)} className="new-expense__mainbtn">
          Add new epxense
        </div>
      ) : (
        <ExpenseForm forSaveExData={forSaveExData} setShow={setShow} />
      )}
    </div>
  );
};
export default NewExpense;
