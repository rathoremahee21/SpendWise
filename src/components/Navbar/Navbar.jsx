import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <h2> SpendWise</h2>
      </div>

       <ul className="nav-links">

        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#features">Features</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

      </ul>

      <div className="nav-buttons">
        <button className="login-btn">
          Login
        </button>

        <Link to="/dashboard" className="start-btn">
          Get Started
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;