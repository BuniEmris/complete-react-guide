import logo from "./logo.svg";
import "./App.css";

import Expenses from "./components/Expenses";

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
  return (
    <div>
      <h2>lets get started! </h2>
      <Expenses expenses={expenses} />
      {/* <ExpenseItem
        name={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      /> */}
    </div>
  );
}

export default App;
