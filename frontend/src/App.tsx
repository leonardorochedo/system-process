import { useState } from 'react'

import { LoginPage } from './routes/LoginPage/LoginPage'
import { RegisterPage } from './routes/RegisterPage/RegisterPage'

import './App.css'

export function App() {
  return (
    <>
      <div className="area" >
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >
      <LoginPage />
      {/* <RegisterPage /> */}
    </>
  )
}