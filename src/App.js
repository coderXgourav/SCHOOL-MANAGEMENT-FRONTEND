import React from "react";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/dashboard/home/Home";
import ViewStudent from "./pages/dashboard/student/ViewStudent";
import AddStudent from "./pages/dashboard/student/AddStudent";
import ViewTeacher from "./pages/dashboard/teacher/ViewTeacher";
import AddTeacher from "./pages/dashboard/teacher/AddTeacher";
import ViewClass from "./pages/dashboard/class/ViewClass";
import AddClass from "./pages/dashboard/class/AddClass";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/dashboard" element={<Home />} />
        <Route path="/admin/view-student" element={<ViewStudent />} />
        <Route path="/admin/add-student" element={<AddStudent />} />
        <Route path="/admin/view-teacher" element={<ViewTeacher />} />
        <Route path="/admin/add-teacher" element={<AddTeacher />} />
        <Route path="/admin/view-class" element={<ViewClass />} />
        <Route path="/admin/add-class" element={<AddClass />} />
      </Routes>
    </Router>
  );
}

export default App;

