import React from "react";

import "./App.css";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "ed1",
      title: "car insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "ed2",
      title: "bs",
      amount: 214.67,
      date: new Date(2021, 7, 14),
    },
    {
      id: "ed3",
      title: "car a",
      amount: 194.67,
      date: new Date(2021, 6, 26),
    },
    {
      id: "ed4",
      title: "car insurance",
      amount: 394.67,
      date: new Date(2021, 11, 8),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("in APP.JS");
    console.log(expense);
  };

  return (
    <div>
      <h2>lets get started Buni! </h2>
      <NewExpense onaddExpenseHandler={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
