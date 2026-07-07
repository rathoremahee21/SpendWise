import "./DashboardPreview.css";

import {
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

function DashboardPreview() {
  return (
    <section className="dashboard">

      <p className="dashboard-tag">
        DASHBOARD PREVIEW
      </p>

      <h2>
        Your finances,
        <br />
        all in one place.
      </h2>

      <p className="dashboard-description">
        Get a complete overview of your income, expenses,
        budgets and savings through a clean and interactive dashboard.
      </p>

      <div className="dashboard-container">

        {/* Left Side */}

        <div className="dashboard-left">

          <div className="balance-card">

            <p>Total Balance</p>

            <h3>₹24,580</h3>

            <span className="positive">
              <FaArrowUp /> +12.8%
            </span>

          </div>

          <div className="income-expense">

            <div className="income">

              <FaArrowUp />

              <div>

                <p>Income</p>

                <h4>₹48,200</h4>

              </div>

            </div>

            <div className="expense">

              <FaArrowDown />

              <div>

                <p>Expenses</p>

                <h4>₹23,620</h4>

              </div>

            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="chart-card">

          <h3>Monthly Spending</h3>

          <div className="chart">

            <div className="bar b1"></div>
            <div className="bar b2"></div>
            <div className="bar b3"></div>
            <div className="bar b4"></div>
            <div className="bar b5"></div>
            <div className="bar b6"></div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default DashboardPreview;