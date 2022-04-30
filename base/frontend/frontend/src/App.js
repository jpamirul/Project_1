import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/homepage/HomePage/HomePage";
import RegisterPage from "./components/registerpage/RegisterPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Kenny is useless</h1>
        <Routes>
          <Route path="/" element={<Navigate replace to="homepage" />} />
          {/* ^ route to homepage */}
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
          <Route path="/InputPage" />
        </Routes>
      </header>
    </div>
  );
}

export default App;
