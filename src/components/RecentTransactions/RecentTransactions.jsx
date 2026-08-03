import "./RecentTransactions.css";



function RecentTransactions({transactions,deleteTransaction,editTransaction,setEditTransaction,search,selectedCategory}) {
  console.log("Search:", search);
console.log("Transactions:", transactions);
  
  const filteredTransactions=transactions.filter((item)=>{
  const matchesSearch=item.title.toLowerCase().includes(search.toLowerCase());

  const matchesCategory=
  selectedCategory==="All" ||
  item.category===selectedCategory;

   return matchesSearch &&matchesCategory;}
  );
  
  return (
  <div className="transactions-card">

    <h3>Recent Transactions</h3>

    {filteredTransactions.length === 0 ? (

<div className="empty-state">

    <h3> No Transactions Yet</h3>

    <p>Start by adding your first transaction.</p>

</div>

) : (
    filteredTransactions.map((item, index) => (
        <div className="transaction-item" key={item.id}>
            <div className="transaction-left">
                <div className="transaction-icon">💰</div>

                <div>
                    <h4>{item.title}</h4>
                    <p>{item.date}</p>
                </div>
            </div>

            <h4 className="amount">
               ₹{item.amount}
            </h4>

<button
    onClick={() => {
        console.log(item);
        setEditTransaction(item);
    }}
>
    Edit
</button>
            <button onClick={()=>deleteTransaction(item.id)}>
              Delete
            </button>
        </div>
    ))
)}
  </div>
);
}

export default RecentTransactions;