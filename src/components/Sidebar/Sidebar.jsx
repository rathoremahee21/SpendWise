import "./Sidebar.css";
import { Link } from "react-router-dom";


function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo">
        <h2>SpendWise</h2>
      </div>

      <nav className="menu">
      <Link to="/analytics">
      Analytics</Link>

       <Link to="/dashboard">
         Dashboard
        </Link>
      

      <Link to="/budget">
          Budget
        </Link>

        <Link to="/split-bills">
          Split Bills
        </Link>


        <Link to="/settings">
          Settings
        </Link>

       
      </nav>

    </aside>
  );
}

export default Sidebar;