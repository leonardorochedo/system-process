import React from "react";

import { LoginPage } from "./routes/LoginPage/LoginPage";
import { RegisterPage } from "./routes/RegisterPage/RegisterPage";
import { Dashboard } from "./routes/Dashboard/Dashboard";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
