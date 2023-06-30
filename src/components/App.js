import React from "react";
import Login from "./Login";
import PersonList from "./axiosPersonlist";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import NoPage from "./404";
import PersonAdd from "./axiosPersonAdd";

const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Login /> }  />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
