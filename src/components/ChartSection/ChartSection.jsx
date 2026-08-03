import "./ChartSection.css";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";




function ChartSection({transactions}) {

    const categoryTotals={};
    
transactions.forEach((item) => {

    if (!categoryTotals[item.category]) {
        categoryTotals[item.category] = 0;
    }

    categoryTotals[item.category] += Number(item.amount);

});
 const data = Object.keys(categoryTotals).map((category) => ({
    name: category,
    value: categoryTotals[category],
}));

const COLORS = [
    "#22c55e",
    "#3b82f6",
    "#ef4444",
    "#a855f7",
];



  return (

<div className="chart-card">

    <div className="chart-header">

        <h3>Monthly Overview</h3>

        <button>Last 6 Months</button>

    </div>

<div className="chart-body">

    <ResponsiveContainer width="100%" height={300}>

    <PieChart>

        <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            innerRadius={60}
           label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
           isAnimationActive={true}
            animationDuration={800}
        >

            {data.map((entry, index) => (

                <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                />

            ))}

        </Pie>

        <Tooltip 
        formatter={(value) => [`₹${value}`, "Amount"]}
        />

    </PieChart>

</ResponsiveContainer>

</div>

</div>


);
}
export default ChartSection;