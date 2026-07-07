import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo">
        <h2>SpendWise</h2>
      </div>

      <nav className="menu">

        <a href="#">Dashboard</a>

        <a href="#">Analytics</a>

        <a href="#">Budget</a>

        <a href="#">Split Bills</a>

        <a href="#">Savings</a>

        <a href="#">Settings</a>

      </nav>

    </aside>
  );
}

export default Sidebar;