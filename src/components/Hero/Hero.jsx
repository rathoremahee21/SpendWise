import "./Hero.css";
import { useState } from "react";
//import { useNavigate } from "react-router-dom";

import MoneyTransition from "../MoneyTransition/MoneyTransition";
import {
  FaCreditCard,
  FaWallet,
  FaChartPie,
  FaCoins,
} from "react-icons/fa";

import { HiOutlineChartBar } from "react-icons/hi2";

import { MdOutlineSavings } from "react-icons/md";

import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  return (
    
    <section id="home" className="hero">

      {/* LEFT SIDE */}

      <div className="hero-left">

        <p className="tagline">
          Welcome to SpendWise
        </p>

        <h1>
          Track Every Rupee.
          <br />
          Split Every Bill.
          <br />
          Save Smarter.
        </h1>

        <p className="description">
          Manage your expenses, budgets and shared payments
          with confidence—all in one place.
        </p>

        <div className="hero-buttons">

          <button
    className="primary-btn"
   onClick={() => {

  setLoading(true);

  setTimeout(() => {

    navigate("/dashboard");

  }, 2500);

}}
>
    Get Started
</button>

     <a
    href="https://github.com/rathoremahee21"
    target="_blank"
    rel="noopener noreferrer"
    className="github-btn"
>
    View GitHub
</a>
        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="hero-right">

        <div className="finance-circle">

          {/* ORBITING ICONS */}

<div className="orbit-container">


<span className="orbit-item item1">
  <FaCreditCard />
</span>

<span className="orbit-item item2">
  <HiOutlineChartBar />
</span>

<span className="orbit-item item3">
  <FaWallet />
</span>

<span className="orbit-item item4">
  <MdOutlineSavings />
</span>

<span className="orbit-item item5">
  <FaCoins />
</span>

<span className="orbit-item item6">
  <FaChartPie />
</span>
         


         

        </div> 

<div className="center-logo">
  <h2>SpendWise</h2>
  <p>Smart Finance</p>
</div>

        </div>

      </div>


      <div className="scroll-indicator">

  <span>↓</span>

  <p>Scroll Down</p>

</div>
{loading && <MoneyTransition />}
    </section>
  );
}

export default Hero;