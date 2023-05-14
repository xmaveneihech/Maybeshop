import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Discover from "../Pages/Discover/index";

const ComRoute = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/discover" element={<Discover />} />
    </Routes>
  );
};

export default ComRoute;
