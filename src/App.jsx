import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Landing from "./pages/Landing/Landing";
import Dashboard from "./pages/Dashboard/Dashboard";
import Analytics from "./pages/Analytics/Analytics";
import Budget from "./pages/Budget/Budget";
import SplitBills from "./pages/SplitBills/SplitBills";
import Settings from"./pages/Settings/Settings";

function App() {
const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : true;
});

useEffect(() => {
    localStorage.setItem(
        "theme",
        JSON.stringify(darkMode)
    );
}, [darkMode]);

  return (
    <Routes>

      <Route
        path="/"
        element={<Landing />}
      />

      <Route
    path="/dashboard"
    element={
        <Dashboard
            darkMode={darkMode}
            setDarkMode={setDarkMode}
        />
    }
/>
     
      <Route
    path="/budget"
    element={
        <Budget
            darkMode={darkMode}
        />
    }
/>
      
     <Route
    path="/split-bills"
    element={
        <SplitBills
            darkMode={darkMode}
        />
    }
/>

   <Route
    path="/settings"
    element={
        <Settings
            darkMode={darkMode}
            setDarkMode={setDarkMode}
        />
    }
/>
    
    <Route
    path="/analytics"
    element={
        <Analytics
            darkMode={darkMode}
        />
    }
/>

    </Routes>
  );
}

export default App;