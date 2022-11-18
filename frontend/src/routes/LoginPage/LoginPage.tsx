import axios from "axios";

import { useState, useEffect } from 'react';

import { Link, useNavigate } from "react-router-dom";

import "./LoginPage.css";

export function LoginPage() {

  const [message, setMessage] = useState("");
  const [userAPI, setUserAPI] = useState({ email: "", senha: "" })
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate()

  const api = axios.create({
    baseURL: "http://localhost:8080",
  });

  useEffect(() => {
    api.get('/all')
    .then((response) => {
      setUserAPI({
        email: response.data[0].email,
        senha: response.data[0].senha
      })
    })
    .catch((err) => {
      console.log(`ERRRO: ${err}`)
    })

    console.log(userAPI)
  }, [])

  async function loginUser(e:any) {
    e.preventDefault()
    // dar get no user e comparar os dados
    if(!userAPI.email) {
      setMessage("Não há usuários cadastrados")
      return
    }

    if(userAPI.email !== email) {
      setMessage("E-mail não confere")
      return
    }

    if(userAPI.senha !== senha) {
      setMessage("Senha não confere")
      return
    }

    setMessage("Logado com sucesso!")
    setTimeout(() => {
      navigate('/dashboard')
    }, 2000)
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
