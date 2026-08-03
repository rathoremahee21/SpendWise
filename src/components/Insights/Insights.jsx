import "./Insights.css";

function Insights({
    totalTransactions,
    highestExpense,
}) {
    return (

        <div className="insights-card">

            <h3>Insights</h3>

           <div className="insight">

<span className="label">
 Total Transactions
</span>

<span className="value">
{totalTransactions}
</span>

</div>

 <div className="insight">

<span className="label">
   Highest Expense
</span>

<span className="value">
{highestExpense.title || "None"}
</span>

</div>

<div className="insight">

<span className="label">
Amount
</span>

<span className="value">
₹{highestExpense.amount}
</span>

</div>          
            
        </div>

    );
}

export default Insights;