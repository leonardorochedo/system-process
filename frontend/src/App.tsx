import React from 'react';

import { LoginPage } from './routes/LoginPage/LoginPage';
import { RegisterPage } from './routes/RegisterPage/RegisterPage';
import { Dashboard } from './routes/Dashboard/Dashboard';

import './App.css'

export function App() {
  return (
    <>
      {/* <LoginPage /> */}
      <RegisterPage />
      {/* <Dashboard /> */}
    </>
  )
}