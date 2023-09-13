import React from "react";
import { Routes, Route } from "react-router-dom";
import Courses from "../Pages/Courses";
import AddCourse from "../Components/NewCourse";
import Privateroutes from "./Privateroutes";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import Dashboard from "../Pages/Dashboard";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/home"
        element={
          <Privateroutes>
            <AddCourse />
          </Privateroutes>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
