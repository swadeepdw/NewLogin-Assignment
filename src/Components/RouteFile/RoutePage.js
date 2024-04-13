import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../Home/Login";
import Landing from "../Home/Landing";

export default function RoutePage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing key="home" />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
