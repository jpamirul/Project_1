import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/homepage/HomePage/HomePage";
import RegisterPage from "./components/registerpage/RegisterPage";
import LogIn from "./components/login/LogIn";
import BudgetInput from "./components/budgetinput/BudgetInput";
import HeatMap from "./components/charts/HeatMap";
import PieChart from "./components/charts/PieChart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Kenny is useless</h1>
        <Routes>
          <Route path="/" element={<Navigate replace to="HomePage" />} />
          {/* ^ route to homepage */}
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
          <Route path="/InputPage" element={<BudgetInput />} />
          <Route path="/HeatMap" element={<HeatMap />} />
          <Route path="/PieChart" element={<PieChart />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
