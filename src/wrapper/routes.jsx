import React from "react";
import { Routes, Route } from "react-router-dom";
import Wrapper from "./wrapper";
import { Abouta } from "./abouta";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />} />
      <Route path="/abouta/:pk" element={<Abouta />} />
    </Routes>
  );
};
