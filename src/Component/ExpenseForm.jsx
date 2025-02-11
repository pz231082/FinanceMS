import { useState } from "react";
import "./ExpenseForm.css"

const ExpenseForm = ({ addExpense }) => {
  const [expense, setExpense] = useState({ category: "", amount: "", date: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!expense.category || !expense.amount) return;
    addExpense({ ...expense, id: Date.now() });
    setExpense({ category: "", amount: "", date: "" }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Category"
        value={expense.category}
        onChange={(e) => setExpense({ ...expense, category: e.target.value })}
      />
      <input
        type="number"
        placeholder="Amount"
        value={expense.amount}
        onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
      />
      <input
        type="date"
        value={expense.date}
        onChange={(e) => setExpense({ ...expense, date: e.target.value })}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;