import "./ExpenseList.css"
const ExpenseList = ({ expenses, deleteExpense }) => {
    return (
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.category} - ₹{expense.amount} ({expense.date})
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default ExpenseList;