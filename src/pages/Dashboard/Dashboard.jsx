import "./Dashboard.css";

import { useState,useEffect } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
//import Topbar from "../../components/Topbar/Topbar";
import SummaryCards from "../../components/SummaryCards/SummaryCards";
import ChartSection from "../../components/ChartSection/ChartSection";
import RecentTransactions from "../../components/RecentTransactions/RecentTransactions";
import BudgetProgress from "../../components/BudgetProgress/BudgetProgress";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import AddTransaction from "../../components/AddTransaction/AddTransaction";
// import AddTransaction from "../../components/AddTransaction/AddTransaction";
import Insights from "../../components/Insights/Insights";
import Analytics from "../../pages/Analytics/Analytics";

function Dashboard({ darkMode,setDarkMode }) {
  //const[transactions,setTransactions]= useState([])
 
  const [transactions, setTransactions] = useState(() => {
  
  const savedTransactions = localStorage.getItem("transactions");
return savedTransactions
        ? JSON.parse(savedTransactions)
        : [];
});

  const[editTransaction,setEditTransaction]=useState(null);


  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");
  //const [darkMode, setDarkMode] = useState(true);
const [monthlyBudget, setMonthlyBudget] = useState(20000);

const totalExpense = transactions.reduce((sum, item) => {

    if (item.type === "Expense") {
        return sum + Number(item.amount);
    }

    return sum;

}, 0);


const totalIncome = transactions.reduce((sum, item) => {

    if (item.type === "Income") {
        return sum + Number(item.amount);
    }

    return sum;

}, 0);


const totalBalance = totalIncome - totalExpense;


   
const totalTransactions = transactions.length;
  
  
const highestExpense =
    transactions
        .filter(item => item.type === "Expense")
        .reduce(
            (max, item) =>
                Number(item.amount) > Number(max.amount)
                    ? item
                    : max,
            { title: "", amount: 0 }
        ); 
        
 useEffect(() => {
    console.log("Saving transactions:", transactions);

    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );
}, [transactions]);


    
  
  
  function deleteTransaction(id){
    setTransactions(
      transactions.filter((item)=>item.id!==id)
    );
  }
   
    function exportCSV() {

    const headers = [
        "Title",
        "Amount",
        "Type",
        "Category",
        "Date"
    ];

    const rows = transactions.map(item => [

        item.title,
        item.amount,
        item.type,
        item.category,
        item.date

    ]);

    const csvContent = [
        headers,
        ...rows
    ]
    .map(row => row.join(","))
    .join("\n");

    const blob = new Blob(
        [csvContent],
        { type: "text/csv" }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "transactions.csv";

    a.click();

    URL.revokeObjectURL(url);

}

   
  return (
   <div className={darkMode ? "dashboard dark" : "dashboard light"}>

      <Sidebar />

      <main className="dashboard-content">

        <DashboardHeader
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        exportCSV={exportCSV}
        />

        <SummaryCards 
        totalExpense={totalExpense}
        totalIncome={totalIncome}
        totalBalance={totalBalance}
        totalTransactions={totalTransactions}
        highestExpense={highestExpense}

        />

        <ChartSection
        transactions={transactions} 
        />

       <Analytics
    transactions={transactions}
    darkMode={darkMode}
/>
<select
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
>
    <option>All</option>
    <option>Food</option>
    <option>Travel</option>
    <option>Shopping</option>
    <option>Bills</option>
</select>


        <input
        type="text"
        placeholder="Search transactions..."
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        
        />
        <RecentTransactions 
        transactions={transactions}
         deleteTransaction={deleteTransaction}
         editTransaction={editTransaction}
         setEditTransaction={setEditTransaction}
         search={search}
         selectedCategory={selectedCategory}
        />

        <BudgetProgress
        totalExpense={totalExpense}
        monthlyBudget={monthlyBudget}
         setMonthlyBudget={setMonthlyBudget}
        />
<Insights
    totalTransactions={totalTransactions}
    highestExpense={highestExpense}
/>

        <AddTransaction 
        setTransactions={setTransactions}
        editTransaction={editTransaction}
    setEditTransaction={setEditTransaction}
        />

      </main>

    </div>
  );
}

export default Dashboard;