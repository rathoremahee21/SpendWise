import "./SplitBills.css";
import { useState } from "react";

function SplitBills() {

    const [bill, setBill] = useState("");
    const [people, setPeople] = useState("");
    const [share, setShare] = useState(null);


    function calculateShare() {

        const totalBill = Number(bill);
        const totalPeople = Number(people);

        if (totalBill <= 0 || totalPeople <= 0) {
            setShare(null);
            return;
        }

        const result = totalBill / totalPeople;

        setShare(result);

    }


    return (

        <div className="split-page">

            <h1>Split Bills</h1>

            <p>
                Split your bills easily with friends.
            </p>


            <div className="split-form">

                <label>
                    Total Bill
                </label>

                <input
                    type="number"
                    placeholder="Enter bill amount"
                    value={bill}
                    onChange={(e) => setBill(e.target.value)}
                />


                <label>
                    Number of People
                </label>

                <input
                    type="number"
                    placeholder="Enter number of people"
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                />


                <button onClick={calculateShare}>
                    Calculate
                </button>

            </div>


            {share !== null && (

                <div className="split-result">

                    <h3>Each Person Pays</h3>

                    <h2>
                        ₹{share.toFixed(2)}
                    </h2>

                </div>

            )}

        </div>

    );
}

export default SplitBills;