import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, dispatch, expenses, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (event) => {
    const newBudget = event.target.value;
    const totalExpenses = expenses.reduce((total, item) => {
      return (total += item.cost);
    }, 0);

    if (newBudget < totalExpenses) {
      alert("Budget cannot be less than spendings: ".concat(currency).concat(totalExpenses));
    } else if (newBudget > 20000) {
      alert("The value cannot exceed more than ".concat(currency).concat(20000));
    } else if (newBudget < 0) {
      alert("The value cannot be less than 0");
    } else {
      setNewBudget(newBudget);
      dispatch({
        type: "SET_BUDGET",
        payload: newBudget,
      });
    }
  };
  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        style={{ width: "180px" }}
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};

export default Budget;
