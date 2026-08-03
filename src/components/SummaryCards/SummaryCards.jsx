import "./SummaryCards.css";

import {
  FaWallet,
  FaArrowTrendUp,
  FaArrowTrendDown,
  FaPiggyBank,
} from "react-icons/fa6";

import { HiArrowUpRight } from "react-icons/hi2";

function SummaryCards({totalExpense,totalIncome,totalBalance,totalTransactions,}) {

  const cards = [
  {
    title: "Total Balance",
    amount: `₹${totalBalance}`,
    // amount: "₹45,200",
    change: "+12.5%",
    color: "#22c55e",
    icon: <FaWallet />,
  },

  {
    title: "Income",
    //amount: "₹72,850",
    amount: `₹${totalIncome}`,
    change: "+8.2%",
    color: "#3b82f6",
    icon: <FaArrowTrendUp />,
  },

  {
    title: "Expenses",
    //amount: totalExpense,
    amount: `₹${totalExpense}`,
    change: "-3.4%",
    color: "#ef4444",
    icon: <FaArrowTrendDown />,
  },

  {
    title: "Savings",
    amount: "₹15,670",
    change: "+15.3%",
    color: "#a855f7",
    icon: <FaPiggyBank />,
  },

{
    title: "Transactions",
    amount: totalTransactions,
    change: "This Month",
    color: "#a855f7",
    icon: <FaPiggyBank />,
  },

];

  return (
    <section className="summary-cards">

      {cards.map((card, index) => (

        <div className="card" key={index}>

         <div className="card-header">

  <div
    className="card-icon"
    style={{ backgroundColor: card.color }}
  >
    {card.icon}
  </div>

  <HiArrowUpRight className="card-arrow" />

</div>

          <h4>{card.title}</h4>

          <h2>{card.amount}</h2>

          <p>{card.change} from last month</p>

        </div>

      ))}

    </section>
  );

}

export default SummaryCards;