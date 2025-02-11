import "./Summarycard.css"
const SummaryCard = ({ expenses }) => {
    const total = expenses.reduce((sum, expense) => sum + Number(expense.amount), 0);
    return <h3>Total Expenses: ₹{total}</h3>;
  };
  
  export default SummaryCard;