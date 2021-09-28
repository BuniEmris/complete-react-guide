import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = ({ forSaveExData, setShow }) => {
  // const [userInput, setUserInput]=useState({
  //   enteredTitle:'',
  //   enteredAmount:'',
  //   enteredDate:''
  // })
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titlechangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountchangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const datechangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const SumbitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    forSaveExData(expenseData);
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
    setShow(true);
  };
  return (
    <form onSubmit={SumbitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titlechangeHandler}
          />
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input
            value={enteredAmount}
            onChange={amountchangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input
            value={enteredDate}
            onChange={datechangeHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <div className="new-expense__actions">
          <button onClick={setShow(false)}> Cancel</button>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add expenses</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
