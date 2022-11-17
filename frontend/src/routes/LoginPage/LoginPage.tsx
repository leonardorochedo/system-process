import axios from "axios";

import { useState } from 'react';

import { Link } from "react-router-dom";

import "./LoginPage.css";

export function LoginPage() {

  const [message, setMessage] = useState("");

  const api = axios.create({
    baseURL: "http://localhost:8080",
  });

  async function loginUser() {
    // dar get no user e comparar os dados
  }

  return (
    <>
      <div className="area">
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
      </div>
      <div className="container">
        <form onSubmit={loginUser} className="form-container">
          <p className="message">{message}</p>
          <h1>Acessar Dashboard</h1>
          <div className="item-form">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              required
              />
          </div>
          <div className="item-form">
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              name="senha"
              placeholder="Digite sua senha"
              required
              />
          </div>
          <div className="actions actions-login">
            <div className="register">
              <p>Não tem uma conta?</p>
              <Link to="/register" className="button btnAbout">
                Clique Aqui
              </Link>
            </div>
            <input className="button" type="submit" value="Entrar" />
          </div>
        </form>
      </div>
    </>
  );
}
