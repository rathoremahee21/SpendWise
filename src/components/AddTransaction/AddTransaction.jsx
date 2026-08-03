import "./AddTransaction.css";
import {useState,useEffect} from "react";


function AddTransaction({setTransactions,editTransaction,setEditTransaction}){
    const[isOpen,setIsOpen] =useState(false);
    const[amount,setAmount]=useState("");
    const[title,setTitle]=useState("");
    const[category,setCategory]=useState("");
    const [type, setType] = useState("Expense");
    const[date,setDate]=useState("");
    

    const expenseCategories = [
    "Food",
    "Travel",
    "Shopping",
    "Bills",
    "Rent",
    "Education",
    "Health",
    "Entertainment",
    "Others"
];

const incomeCategories = [
    "Salary",
    "Freelancing",
    "Business",
    "Interest",
    "Gift",
    "Refund",
    "Others"
];
    useEffect(() => {

        console.log("useEffect ran");
    console.log(editTransaction);

        if(editTransaction){
setTitle(editTransaction.title);
setAmount(editTransaction.amount);
setCategory(editTransaction.category);
setDate(editTransaction.date);
setType(editTransaction.type);
setIsOpen(true);
        }
}, [editTransaction]);


    function handleClick(){
setIsOpen(!isOpen);
    }
    
    function handleSave(){
        if (
    !title ||
    !amount ||
    !category ||
    !date
) {
    alert("Please fill all fields.");
    return;
}
    const newTransaction={id:editTransaction?editTransaction.id:
          Date.now(),
        amount,
           title,
           type,
           category,
           date, 
        };

        
        console.log(newTransaction);
      

        if(editTransaction){
            setTransactions((prev)=>
            prev.map((item)=>
            item.id===editTransaction.id?newTransaction:item));
        }else{
            setTransactions((prev)=> [...prev,newTransaction]);
        }
        //setTransactions((prev)=>[...prev,newTransaction]);

        setEditTransaction(null);
        setType("Expense");
 
        setAmount("");
        setTitle("");
        setCategory("");
        setDate("");
        setIsOpen(false);

    }
    return (

        <div className="add-transaction">
   <button onClick={handleClick}>
Add Transaction
   </button>
{isOpen &&(
    <div className="transaction-form">
        <h3>Add New Transaction</h3>
      
      <label>Amount</label>
    <input 
    type ="number"
    placeholder="Enter Amount"
    value={amount}
    onChange={(e)=> setAmount(e.target.value)}
    />

<label>Title</label>
<input
type="text"
placeholder="Enter Title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>

<label>Type</label>

<select
    value={type}
onChange={(e) =>{ setType(e.target.value)
         setCategory("");
    }}
>
    <option>Expense</option>
    <option>Income</option>
</select>

<label>Category</label>

<select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
>

    <option value="">Select Category</option>

    {(type === "Expense"
        ? expenseCategories
        : incomeCategories
    ).map((item) => (

        <option key={item} value={item}>
            {item}
        </option>

    ))}

</select>

<label>Date</label>

<input
    type="date"
    value={date}
    onChange={(e) => setDate(e.target.value)}
/>

<button className="save-btn"
onClick={handleSave}>

    Save Transaction
</button>


        </div>
)}

        </div>
    );
}

export default AddTransaction;