import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import History from "./components/History";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="myNav">
          <div>Dictionary App</div>
          <div>
          <Link to="/">Home</Link>
          <Link to="/history">History</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
