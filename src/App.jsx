import { useState } from 'react'
import ExpenseForm from "./Component/ExpenseForm";
import ExpenseList from "./Component/ExpenseList";
import SummaryCard from "./Component/Summarycard";
import ExpenseChart from "./Component/ExpenseChart";
import "./App.css"
import Footer from './Component/footer';
import Navbar from './Component/NavBar';


const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className='mainDiv'>
      <Navbar />
      <h1>Finance Manager</h1>
      <ExpenseForm addExpense={addExpense} />
      <SummaryCard expenses={expenses} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      <ExpenseChart expenses={expenses} />
      <Footer />
    </div>
  );
};

export default App;


