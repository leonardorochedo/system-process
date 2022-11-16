import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import React from 'react';

export function RegisterPage() {

    const navigate = useNavigate();

    // API
    const api = axios.create({
        baseURL: "http://localhost:8080" 
    });

    async function registerUser() {
        
        await api.post('/add', )
        .then((response) => {
            console.log("Dado adicionado com sucesso")
            navigate('/dashboard')
        })
        .catch((err) => {
            console.log("Erro: " + err)
        })
    }
    
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
        <div className='container'>
            <form onSubmit={registerUser} className='form-container'>
                <h1>Cadastrar Usuário</h1>
                {/* <div className='item-form'>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name='name' placeholder='Digite seu nome' required />
                </div> */}
                <div className='item-form'>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" name='email' placeholder='Digite seu e-mail' required />
                </div>
                <div className='item-form'>
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" name='senha' placeholder='Digite sua senha' required />
                </div>
                <div className='actions actions-login'>
                    <div className='register'>
                        <p>Já tem uma conta?</p>
                        <button className='button'>Entrar</button>
                    </div>
                    <input className='button' type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
        </>
    )
}