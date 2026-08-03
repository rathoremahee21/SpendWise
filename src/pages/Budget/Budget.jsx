import "./Budget.css";
import { useState } from "react";

function Budget() {

     const [monthlyBudget, setMonthlyBudget] = useState(() => {

        const savedBudget = localStorage.getItem("monthlyBudget");

        return savedBudget
            ? Number(savedBudget)
            : 2000;

    });

 const [transactions] = useState(() => {

        const savedTransactions =
            localStorage.getItem("transactions");

        return savedTransactions
            ? JSON.parse(savedTransactions)
            : [];

    });

const totalExpense = transactions.reduce((sum, item) => {

        return sum + Number(item.amount);

    }, 0);


    const remaining = monthlyBudget - totalExpense;
  
     const percentage =
        monthlyBudget > 0
            ? (totalExpense / monthlyBudget) * 100
            : 0;


    function handleBudgetChange(e) {

        const newBudget = Number(e.target.value);

        setMonthlyBudget(newBudget);

        localStorage.setItem(
            "monthlyBudget",
            newBudget
        );

    }

  return (
    <div className="budget-page">

      <h1>Budget</h1>

      <p>Manage your monthly spending budget.</p>
    

     <div className="budget-input">

                <label>
                    Monthly Budget
                </label>

                <input
                    type="number"
                    value={monthlyBudget}
                    onChange={handleBudgetChange}
                />

            </div>
      <div className="budget-cards">

                <div className="budget-stat">

                    <h4>Monthly Budget</h4>

                    <h2>₹{monthlyBudget}</h2>

                </div>


                <div className="budget-stat">

                    <h4>Total Spent</h4>

                    <h2>₹{totalExpense}</h2>

                </div>


                <div className="budget-stat">

                    <h4>Remaining</h4>

                    <h2>
                        ₹{remaining}
                    </h2>

                </div>
                 
                  <div className="budget-stat">

                    <h4>Budget Used</h4>

                    <h2>
                        {percentage.toFixed(1)}%
                    </h2>

                </div>

            </div>


            <div className="budget-progress">

                <div
                    className="budget-progress-fill"
                    style={{
                        width: `${Math.min(percentage, 100)}%`
                    }}
                />

            </div>

            {remaining < 0 && (

                <p className="budget-warning">
                    You have exceeded your monthly budget.
                </p>

            )}

    </div>
  );
}

export default Budget;