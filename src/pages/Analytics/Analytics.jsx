import "./Analytics.css";
import { useState } from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";

function Analytics({transactions, darkMode}) {
console.log("Dark Mode =", darkMode);
    const COLORS = [
    "#22c55e",
    "#3b82f6",
    "#ef4444",
    "#a855f7",
    "#f59e0b",
];



    const totalTransactions = transactions.length;

  const totalExpense = transactions
.filter(item=>item.type==="Expense")
.reduce((sum,item)=>sum+Number(item.amount),0);

const totalIncome =
transactions
.filter(item=>item.type==="Income")
.reduce((sum,item)=>sum+Number(item.amount),0);

   const expenseTransactions =
transactions.filter(item=>item.type==="Expense");

const averageExpense =
expenseTransactions.length===0
?0
:totalExpense/expenseTransactions.length;

     const categoryTotals = {};

     transactions
.filter(item => item.type === "Expense")
.forEach((item) => {

    if (!categoryTotals[item.category]) {
        categoryTotals[item.category] = 0;
    }

    categoryTotals[item.category] += Number(item.amount);

});

const categoryData = Object.keys(categoryTotals).map((category) => ({
    name: category,
    value: categoryTotals[category],
}));

const monthlyTotals = {};

transactions.forEach((item) => {

    const month = item.date.slice(0, 7);

    if (!monthlyTotals[month]) {

       monthlyTotals[month] = {
    month: month,
    income: 0,
    expense: 0,
};

    }

    if (item.type === "Income") {

        monthlyTotals[month].income += Number(item.amount);

    }

    else {

        monthlyTotals[month].expense += Number(item.amount);

    }

});

const monthlyData = Object.values(monthlyTotals);


let topCategory = "None";
let highestAmount = 0;

Object.keys(categoryTotals).forEach((category) => {

    if (categoryTotals[category] > highestAmount) {

        highestAmount = categoryTotals[category];
        topCategory = category;

    }

});
console.log(categoryData);
  return (
     <div
    className={`analytics-page ${
        darkMode ? "dark" : "light"
    }`}
>
      <h1>Financial Analytics</h1>

      <div className="analytics-cards">


        <div className="analytics-card">
          <h4>Total Transactions</h4>
          <h2>{totalTransactions}</h2>
        </div>



        <div className="analytics-card">
          <h4>Total Expenses</h4>
          <h2>₹{totalExpense}</h2>
        </div>

        <div className="analytics-card">
          <h4>Average Expense</h4>
          <h2>₹{averageExpense.toFixed(0)}</h2>
        </div>

        <div className="analytics-card">
    <h4>Top Spending Category</h4>
    <h2>{topCategory}</h2>
    <p>₹{highestAmount}</p>
</div>

     </div>


     <div className="analytics-chart">

    <h3>Spending by Category</h3>

    <PieChart width={400} height={300}>

        <Pie
            data={categoryData}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
        >

            {categoryData.map((entry, index) => (

                <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                />

            ))}

        </Pie>

         <Tooltip />

        <Legend />

        </PieChart>

        </div>

        <div className="analytics-chart">

    <h3>Monthly Income vs  Expenses</h3>

    <ResponsiveContainer width="100%" height={300}>

        <BarChart data={monthlyData}>

           
           <CartesianGrid
stroke={darkMode ? "#374151" : "#d1d5db"}
strokeDasharray="4 4"
/>
            <XAxis
    dataKey="month"
    stroke={darkMode ? "white" : "#111827"}
/>

            <YAxis
    stroke={darkMode ? "white" : "#111827"}
/>

    <Tooltip
contentStyle={{
background:darkMode ? "#161B22" : "white",
color:darkMode ? "white" : "#111827",
border:"none",
borderRadius:"10px"
}}
labelStyle={{
color:darkMode ? "white" : "#111827"
}}
/>  

 <Legend
wrapperStyle={{
color:darkMode ? "white" : "#111827"
}}
/>

<Bar
    dataKey="income"
    name="Income"
    fill="#22c55e"
    radius={[8,8,0,0]}
    barSize={200}
/>

<Bar
    dataKey="expense"
    name="Expense"
    fill="#ef4444"
    radius={[8,8,0,0]}
    barSize={200}
/>
           
        </BarChart>

    </ResponsiveContainer>

</div>


</div>
   
  );
}

export default Analytics;