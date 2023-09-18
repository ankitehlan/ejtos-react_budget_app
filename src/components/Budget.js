import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget } = useContext(AppContext);
  const { dispatch } = useContext(AppContext);
  const { expenses } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (event) => {
    const newBudget = event.target.value;
    const totalExpenses = expenses.reduce((total, item) => {
      return (total += item.cost);
    }, 0);

    if (newBudget < totalExpenses) {
      alert("Budget cannot be less than spendings:" + totalExpenses);
    } else if (newBudget > 20000) {
      alert("The value cannot exceed more than 20000");
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
      <span>Budget: $</span>
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
