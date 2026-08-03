import "./Features.css";
import FeatureCard from "./FeatureCard";

import {
  FaWallet,
  FaChartPie,
  FaCoins,
  FaUserFriends,
  FaShieldAlt,
} from "react-icons/fa";

import { MdOutlineSavings } from "react-icons/md";

function Features() {
  return (
    <section id="features" className="features">

      <p className="features-tag">
        WHY SPENDWISE
      </p>

      <h2 className="features-heading">
        Everything You Need to
        <br />
        Master Your Finances
      </h2>

      <p className="features-description">
        Powerful tools designed to help you track expenses,
        manage budgets, split bills, and build better financial habits.
      </p>

      <div className="features-grid">

        <FeatureCard
          icon={<FaWallet />}
          title="Expense Tracker"
          description="Record every expense and understand exactly where your money goes."
        />

        <FeatureCard
          icon={<FaUserFriends />}
          title="Split Bills"
          description="Share restaurant, trip and hostel expenses with friends instantly."
        />

        <FeatureCard
          icon={<FaChartPie />}
          title="Smart Analytics"
          description="Interactive charts that help you visualize your spending habits."
        />

        <FeatureCard
          icon={<FaCoins />}
          title="Budget Planner"
          description="Set monthly budgets and receive insights before overspending."
        />

        <FeatureCard
          icon={<MdOutlineSavings />}
          title="Savings Goals"
          description="Create savings goals and monitor your progress effortlessly."
        />

        <FeatureCard
          icon={<FaShieldAlt />}
          title="Secure Data"
          description="Your financial information stays encrypted and completely secure."
        />

      </div>

    </section>
  );
}

export default Features;