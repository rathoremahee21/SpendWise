import "./DashboardHeader.css";
import {Bell} from "lucide-react";
function DashboardHeader({darkMode,setDarkMode,exportCSV}) {
return(
<div className="dashboard-header">
<div className="header-left">
<h2>Welcome Back, Mahee</h2>

<p>Track your finances with confidence.</p>

<button 
className="export-btn"
onClick={exportCSV}>
    Export CSV
</button>
 
</div>

<div className="header-right">
<button className="notification-btn">
<Bell size={20}
/>
</button>

<div className="profile-avatar">M</div>

<button 
className="theme-btn"
onClick={() => setDarkMode(!darkMode)}>
    {darkMode ? "Light" : "Dark"}
</button>
</div>
</div>

);
}
export default DashboardHeader;