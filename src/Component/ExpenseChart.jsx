import "./ExpenseChart.css"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const ExpenseChart = ({ expenses }) => {
  const categories = [...new Set(expenses.map((exp) => exp.category))];

  const data = categories.map((category) => ({
    category,
    amount: expenses.filter((exp) => exp.category === category).reduce((sum, exp) => sum + Number(exp.amount), 0),
  }));

  return (
    <div className="expense-container">
      <h3>Expense Breakdown</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

      <h3>Category-wise Pie Chart</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="amount" nameKey="category" cx="50%" cy="50%" outerRadius={100} fill="#82ca9d" label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={["#0088FE", "#00C49F", "#FFBB28", "#FF8042"][index % 4]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseChart;
