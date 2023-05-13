import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Discover from "../Pages/Discover/index";
import Iphone from "../Pages/Discover/iphone";

const ComRoute = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/iphone" element={<Iphone />} />
    </Routes>
  );
};

export default ComRoute;
