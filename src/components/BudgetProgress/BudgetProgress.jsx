import "./BudgetProgress.css";
//import { PieChart, Pie } from "recharts";

//import { PieChart, Pie, Cell } from "recharts";
//import { PieChart, Pie, Cell, Legend } from "recharts"; 
import { useState } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";


const COLORS = ["#22c55e", "#ef4444"];

function BudgetProgress({totalExpense,monthlyBudget, setMonthlyBudget}) {
  //const monthlyBudget = 2000;

  
  const remaining = monthlyBudget - totalExpense;
const [isEditing, setIsEditing] = useState(false);
const data=[
  {
        name: "Remaining",
        value: remaining,
    },
    {
        name: "Expenses",
        value: totalExpense,
    },
]
  
  const percentage = (totalExpense / monthlyBudget) * 100;
  const isOverBudget = totalExpense > monthlyBudget;
  return (
    
<div className="budget-card">
<h3>Monthly Budget</h3>

{!isEditing ? (

<div className="budget-display">

<h2>₹{monthlyBudget}</h2>

<button
onClick={() => setIsEditing(true)}
>

Change Budget

</button>

</div>

) : (

<div className="budget-edit">

<input
type="number"
value={monthlyBudget}
onChange={(e)=>
setMonthlyBudget(Number(e.target.value))
}
/>

<button
onClick={() => setIsEditing(false)}
>

Save

</button>

</div>

)}

<PieChart width={250} height={250}>
<Pie 
data={data}

dataKey="value"
nameKey="name"
>

{data.map((entry,index)=>(
  <Cell key={index} fill={COLORS[index]}/>
)
)}
</Pie>
<Tooltip />
<Legend
  verticalAlign="bottom"
  align="center"
  />
</PieChart>

<div className="progress-bar">

    <div
        className="progress-fill"
        style={{

width:`${Math.min(percentage,100)}%`

}}
    ></div>

</div>

<p>{percentage.toFixed(1)}% Used</p>


<div className="budget-summary">

    <p>
        <strong>Budget:</strong> ₹{monthlyBudget}
    </p>

    <p>
        <strong>Spent:</strong> ₹{totalExpense}
    </p>

    <p>
        <strong>Remaining:</strong> ₹{remaining}
    </p>

{
    isOverBudget && (
        <p style={{ color: "red" }}>
            Budget Exceeded!
        </p>
    )
}

</div>


</div>

  );
}

export default BudgetProgress;