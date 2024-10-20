import React from "react";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/dashboard/home/Home";
import ViewStudent from "./pages/dashboard/student/ViewStudent";
import AddStudent from "./pages/dashboard/student/AddStudent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/dashboard" element={<Home />} />
        <Route path="/admin/view-student" element={<ViewStudent />} />
        <Route path="/admin/add-student" element={<AddStudent />} />
      </Routes>
    </Router>
  );
}

export default App;

