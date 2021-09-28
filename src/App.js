import React, { useState } from "react";

import "./App.css";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DummyData = [
  {
    id: "ed1",
    title: "car insurance",
    amount: 294.67,
    date: new Date(2020, 2, 28),
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
    title: "repair",
    amount: 394.67,
    date: new Date(2020, 11, 8),
  },
];
function App() {
  const [updateData, setUpdateData] = useState(DummyData);

  const addExpenseHandler = (expense) => {
    console.log("in APP.JS");
    console.log(expense, "aaa1");
    setUpdateData((prevState) => {
      return [expense, ...prevState];
    });

    console.log(updateData, "aa2222");
  };

  return (
    <div>
      <h2>lets get started Buni! </h2>
      <NewExpense onaddExpenseHandler={addExpenseHandler} />
      <Expenses expenses={updateData} />
    </div>
  );
}

export default App;
