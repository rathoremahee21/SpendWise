import "./Settings.css";

function Settings({ darkMode, setDarkMode }) {

    

function toggleDarkMode() {
    setDarkMode(!darkMode);
}
    


    function clearTransactions() {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete all transactions?"
        );

        if (confirmDelete) {
            localStorage.removeItem("transactions");

            alert("All transactions deleted.");
        }
    }


    return (

        <div className="settings-page">

            <h1>Settings</h1>

            <div className="settings-section">

                <h3>Appearance</h3>

                <div className="setting-row">

                    <div>
                        <h4>Dark Mode</h4>
                        <p>Switch between light and dark mode.</p>
                    </div>

                    <button onClick={toggleDarkMode}>
                        {darkMode ? "Light" : " Dark"}
                    </button>

                </div>

            </div>


            <div className="settings-section">

                <h3>Currency</h3>

                <div className="setting-row">

                    <div>
                        <h4>Default Currency</h4>
                        <p>Indian Rupee (₹)</p>
                    </div>

                </div>

            </div>


            <div className="settings-section">

                <h3>Data</h3>

                <button
                    className="delete-button"
                    onClick={clearTransactions}
                >
                    Clear All Transactions
                </button>

            </div>

        </div>

    );
}

export default Settings;