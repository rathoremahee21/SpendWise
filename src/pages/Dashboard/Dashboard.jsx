import "./Dashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar";

function Dashboard() {
  return (
    <div className="dashboard">

      <Sidebar />

      <main className="dashboard-content">

        <h1>Welcome Back </h1>

      </main>

    </div>
  );
}

export default Dashboard;