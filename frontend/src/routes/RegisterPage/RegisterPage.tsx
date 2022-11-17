import { useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

export function RegisterPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [message, setMessage] = useState("");

  // API
  const api = axios.create({
    baseURL: "http://localhost:8080",
  });

  async function registerUser() {
    await api
      .post(`/add?email=${email}&senha=${senha}`)
      .then((response) => {
        setMessage('Cadastrado com sucesso!')
      })
      .catch((err) => {
        setMessage("Erro: " + err);
      });
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
        <form onSubmit={registerUser} className="form-container">
          <p className="message">{message}</p>
          <h1>Cadastrar Usuário</h1>
          <div className="item-form">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="item-form">
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              name="senha"
              placeholder="Digite sua senha"
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <div className="actions actions-login">
            <div className="register">
              <p>Já tem uma conta?</p>
              <Link to="/login" className="button btnAbout">
              Clique Aqui
              </Link>
            </div>
            <input className="button" type="submit" value="Cadastrar" />
          </div>
        </form>
      </div>
    </>
  );
}
