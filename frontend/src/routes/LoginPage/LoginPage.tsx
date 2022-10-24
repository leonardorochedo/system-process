import React from 'react';

import './LoginPage.css';

export function LoginPage() {
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
            <form action="" method='POST' className='form-container'>
                <h1>Acessar Conta</h1>
                <div className='item-form'>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" name='email' placeholder='Digite seu e-mail' />
                </div>
                <div className='item-form'>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" name='password' placeholder='Digite sua senha' />
                </div>
                <div className='actions actions-login'>
                    <div className='register'>
                        <p>Não tem uma conta?</p>
                        <button className='button'>Cadastrar</button>
                    </div>
                    <input className='button' type="submit" value="Entrar" />
                </div>
            </form>
        </div>
        </>
    )
}